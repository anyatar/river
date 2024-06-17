import { Request, Response } from "express";
import {IUser, ViewUser} from "../models/User";
import bcrypt from "bcrypt"
import SQLiteRepository from "../repositories/sqlite.repository";
import jwt  from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

export default class AthenticationController {

    async register(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user:IUser = { username, password: hashedPassword };
            await SQLiteRepository.save(user);
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Registration failed' });
        }
    };

    async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            const user = await SQLiteRepository.find(username);
            if (!user) {
                return res.status(401).json({ error: 'Authentication failed' });
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Authentication failed' });
            }
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'your_secret_key', {
                expiresIn: '1h',
            });
            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ error: 'Login failed' });
        }
    }

    async users(req: Request, res: Response) {
        try {
            const users:IUser[] = await SQLiteRepository.getAll();
            const viewUsers: ViewUser[] = users.map((user) => ({
                username: user.username,
                id: user.id,
            }));
            res.status(200).json(viewUsers);
        } catch (error) {
            res.status(500).json({ error: 'Registration failed' });
        }
    };
}
