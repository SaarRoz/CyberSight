<section align="center">
<img src="/apps/client/src/favicon.ico" width="110" alt="Cybersight logo"/>

# CyberSight

**CyberSight is our final project at Bar-Ilan University, developed as part of our academic degree in the Department of Information Sciences. After submitting the project, I continued to work on it independently.**

Deepfakes, realistic synthetic media generated using machine learning algorithms, have become a significant concern in recent years. They can be employed to spread disinformation or for malicious purposes, and it's often difficult to discern what's real and what's not. In response, we have developed an application capable of identifying whether a picture of a human face is real or fake.

</section>

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [General Folder Structure](#general-folder-structure)
3. [Prerequisites](#prerequisites)
4. [Setup](#setup)
5. [Running the Project](#running-the-project)
6. [Databases UI Access](#databases-ui-access)
7. [About the Identification Technique](#about-the-identification-technique)
8. [Project Members](#project-members)

## Technologies Used

- **Frontend:** Angular
- **Backend:** NestJS, and Flask
- **Databases:** PostgreSQL, and MongoDB (using Prisma ORM)
- **Monorepo Management:** Turborepo

In addition, we used [Dev Containers](https://containers.dev/) for the development process. This approach enables us to run the entire project in a Docker container, including all the necessary dependencies and configurations.

**Notable JS Libraries:**

- typescript
- eslint
- prisma
- joi
- sharp
- passport
- argon2

## General Folder Structure

```
├── .devcontainer //Dev Containers configuration files and environment variables for development
├── apps
│   ├── client //Angular
│   └── server //NestJS
├── packages
|   ├── database //Prisma schemas for both PostgreSQL and MongoDB
|   ├── eslint-config-custom //Shared ESLint configuration
|   ├── shared //Validation rules and types
└──python_apps
    ├── image_detect_flask //Flask server (for image detection)
    └── train_and_classification //Python scripts for training and classification
```

## Prerequisites

- Docker Desktop
- Visual Studio Code
- Dev Containers extension for VS Code
- MongoDB server

## Setup

1. **Download Docker Desktop:**  
   Visit the [Docker Desktop download page](https://www.docker.com/products/docker-desktop/#) and choose the package suitable for your system.
2. **Launch Docker Desktop:**  
   After installation, launch the Docker Desktop application.
3. **Install Dev Containers Extension:**  
   In VS Code, navigate to the Extensions Marketplace and install the 'Dev Containers' extension.
4. **Clone The Repository:**  
   Clone this repository locally and open it in VS Code.
5. **Insert MongoDB Connection String:**  
   In the `.devcontainer/dev.env` file, replace the `MONGODB_DATABASE_URL` value with your MongoDB connection string.

## Running the Project

1. **Build The Dev Container:**  
   Press `F1` or `Ctrl+Shift+P` to open the VS Code command palette. Type and select: 'Dev Containers: Build and Open in Container' (or 'Dev Containers: Rebuild and Reopen in Container'). The container build process will start; this may take several minutes on the first run.

   - **View Build Logs:**  
     Click on 'Show Log' in the bottom right corner to monitor the build process in real-time.
     <img src="https://i.ibb.co/Yj87Yn1/showlog-vscode.jpg" width="410" alt="Showlog bottom in VS Code"/>

2. **Run Project:**  
   After the build completes, wait for the ZSH terminal to display 'Done. Press any key to close the terminal'.
   <img src="https://i.ibb.co/gPvtBTD/build-done.png" width="510" alt="Showlog bottom in VS Code"/>

   Then, press `F1` or `Ctrl+Shift+P` again to open the VS Code command palette. Select 'Tasks: Run Task' and choose 'Run Server, Client, and Flask'.

   - Alternatively, you can run the following commands: `pnpm -F server dev`, `pnpm -F client dev`, and `cd python_apps/image_detect_flask/ && flask --app main run`.

3. **Open the Web Application:**  
   When the tasks have finished loading, open your web browser and go to [http://localhost:4200](http://localhost:4200) to access the client-side homepage.

## Databases UI Access

To access the UI of the databases (Prisma Studio), go back to 'Run Task' in VS Code and choose 'Run Prisma Studio (Postgres)', and then run another task and choose: 'Run Prisma Studio (Mongo)'.

- Alternatively, you can run the following commands: `pnpm -F database postgres:studio`, and `pnpm -F database mongo:studio`.

## About the Identification Technique

We utilized supervised models to distinguish between real and fake facial images, employing high-frequency component analysis. This technique is based on the following article:

Durall, R., Keuper, M., Pfreundt, F. J., & Keuper, J. (2019). _Unmasking deepfakes with simple features_. </br>
&nbsp;&nbsp;&nbsp;&nbsp;arXiv preprint arXiv:1911.00686.

Additionally, we referred to the code shared by the article's authors on [GitHub](https://github.com/cc-hpc-itwm/DeepFakeDetection).

**Identification Process:**

1. The user uploads an image.
2. The image is transmitted to the Flask server.
3. Detection and focus are performed on the face (if it's not a face, an appropriate message is sent back to the user).
4. The image is then converted to a resolution of 256x256 and subsequently transformed into a one-dimensional spectrum.
5. The models execute the prediction.
6. The prediction result is sent to the user.

**Training Data and Models:**

The supervised models underwent training on 38,400 images of human faces, categorized into the following datasets:

<ins>_Fake:_</ins>

- 100KFake: 6,400
- ThisPersonDoesnotExist: 12,800

<ins>_Real:_</ins>

- CelebA: 6,400
- CelebA-HQ: 6,400
- Flickr-Faces-HQ: 6,400

To enhance accuracy, three models were employed, and the final prediction result is determined by the majority prediction across these models. The models used are:

- Support Vector Machine (SVM) – scikit-learn
- Logistic Regression – scikit-learn
- Neural Network (NN) – TensorFlow

Each model provides a binary answer: 0 for a real face and 1 for a fake face.

## Project Members

👤 **Saar Rozenthal**

- [GitHub](https://github.com/SaarRoz)

👤 **Yuval Tzoor**

- [GitHub](https://github.com/YuvalTzoor)

👤 **Shaked Partush**

- [GitHub](https://github.com/shak4560)

👤 **Yuval Abramovich**

- [GitHub](https://github.com/Yuvalabra)
