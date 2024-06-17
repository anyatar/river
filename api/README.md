# Recording Server Task

## Overview

The goal of this task is to create a server that manages the state of recordings during a recording session. The server will handle two main entities:

1. **Take**: Represents a single recording session, which consists of multiple recordings from different participants.
2. **Recording**: Represents the progress of the uploading of an individual participant's recording.

## Task Description

Each user login with his email and password into the recording session.
In a recording session, when the host starts the session, it signals all participants to start recording. Each participant, including the host, will call the backend server to create a recording that is part of the current take.

Once the recording on the client-side is complete, the recordings start uploading to S3. During the upload process, the progress of each recording should be updated in the database. The frontend will display a progress bar showing the overall progress of the take.

### Entity Relationships

- A **Take** has multiple **Recordings**.
- A **Recording** belongs to a **Take**.

### Progress Tracking

- Each recording's progress will be tracked and updated in the database during the upload process.
- The frontend will display a progress bar representing the overall progress of the take, calculated from the individual recording progresses.

## Setup Instructions

1. Clone the repository.
2. Create a branch under your name.
3. Install dependencies: `npm install` or `yarn install`
4. Run `docker-compose up --build`.
5. Start the server: `npm start`

## Additional Notes

- Use an appropriate database to store takes and recordings.
- Ensure secure authentication and authorization mechanisms are in place.
- Handle error cases and edge scenarios, such as invalid inputs and network failures.
- Write unit and integration tests to ensure the robustness of your implementation.

## Submission Guidelines

- Push the branch to the repository containing your solution.
- Make sure the code is running.
- Include any additional documentation or comments as necessary.
