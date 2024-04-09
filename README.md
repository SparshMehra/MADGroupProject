# Natural Burial Form Project

This project consists of a Node.js server handling form data storage and retrieval, and a client-side web form designed for natural burial service inquiries. The form supports accessibility features including voice readout for users with visual impairments.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download and install Node.js and npm from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the repository to your local machine:**

```bash
git clone https://github.com/SparshMehra/MADGroupProject.git
cd path/to/your/directory
```


2. **Install dependencies:**

```bash
npm install
```


### Starting the Server

To get the server running:

1. **Navigate to your project directory:**

```bash
cd path/to/your-project
```


2. **Start the server:**

```bash
node NodeJsBackend/server.js
```


The server will be active on `http://localhost:3000`. You should see a console message indicating that it's listening for requests.

## Spring Boot Branch

In addition to the main branch, there is a separate branch featuring a Spring Boot server that connects to a database. This setup allows for the form data to be persisted in a database when the "Submit" button is clicked.

### Switching to the Spring Boot Branch

To switch to the Spring Boot branch and start using the database functionality:

1. **Fetch all branches:**

```bash
git fetch --all
```


2. **Switch to the Spring Boot branch:**

```bash
git checkout spring-boot-branch
```

3. **Follow the README instructions on that branch to set up and run the Spring Boot server.**

This branch requires additional setup, including configuring the database connection. Ensure you follow the instructions provided in the branch's README for a smooth setup.


## Accessing the Form

Open your web browser and go to `http://localhost:3000/theForm.html` to access the natural burial form. Adjust this URL based on your server's configuration if necessary.

## Usage

The form allows users to enter personal and burial information, select from various options for gender, burial location, casket/shroud, and grave marker, and includes accessibility features like voice readouts.

### Features

- **Dark Mode Toggle:** Users can switch between light and dark themes for better visibility.
- **Voice Assistance:** Enhances accessibility by reading out form questions and user inputs.

### Managing Data

- **Download Data:** Users can download their form data to a local file.
- **Upload Data:** Users can upload their form data back to the server.

## Contributing

Contributions are welcome. If you have suggestions for improving the form or server functionality, please fork the repository, make your changes, and submit a pull request.

## Authors

- Sparsh Mehra (Group Leader/Front End)
- Mohammad Zaid Khan (Backend)
- Tooba Javed (Front End)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


