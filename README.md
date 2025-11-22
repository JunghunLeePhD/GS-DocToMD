# **GS-DocToMD**

**DocToMD** is a lightweight Google Apps Script web application designed to convert rich text (such as content copied from Google Docs or MS Word) into clean Markdown format.

This tool streamlines the documentation process by allowing you to draft in a rich-text environment and instantly convert your work for Markdown-supported platforms (GitHub, Obsidian, Notion, etc.).

## **🎥 Demo**

![Demo of the App](./assets/GS_DocToMD_Demo.gif)

## **🚀 Features**

- **Simple Web Interface:** A clean UI to paste your content.

- **Instant Conversion:** Converts headings, lists, bold, italic, and links into standard Markdown.

- **One-Click Copy:** Automatically copies the converted Markdown to your system clipboard.

- **Google Apps Script:** Runs entirely in the cloud; no local server required after deployment.

## **🐳 Development Environment (Dev Container)**

This repository is configured with a **Dev Container**. This is the recommended way to develop, as it automatically sets up the environment with Node.js, npm, and Clasp installed.

**Requirements for Dev Container:**

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

- [Visual Studio Code](https://code.visualstudio.com/)

- [Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VS Code

## **🛠 Prerequisites (Manual Setup)**

If you are **not** using the Dev Container, ensure you have the following installed on your local machine:

- **Node.js & npm**

- **Google Clasp** (Command Line Apps Script Projects)

```bash
npm install @google/clasp -g
```

- A **Google Account**.

## **📥 Installation & Setup**

### **Option A: Using Dev Container (Recommended)**

1. Clone the repository and open the folder in VS Code.

   ```bash
   git clone [https://github.com/JunghunLeePhD/GS-DocToMD.git](https://github.com/JunghunLeePhD/GS-DocToMD.git)
   cd GS-DocToMD
   ```

2. When prompted by VS Code, click **"Reopen in Container"** (or run the command `Dev Containers: Reopen in Container`from the Command Palette).

3. Wait for the container to build. Once inside, the terminal will already have `clasp` installed.

4. Proceed to step 2 below (Login).

### **Option B: Manual Installation**

1. Clone the repository:

   ```bash
   git clone [https://github.com/JunghunLeePhD/GS-DocToMD.git](https://github.com/JunghunLeePhD/GS-DocToMD.git)
   cd GS-DocToMD
   ```

2. Ensure `clasp` is installed globally (see Prerequisites above).

### **2. Login to Clasp**

Regardless of whether you use the Dev Container or manual setup, you must authenticate `clasp` with your Google account.

```bash
clasp login
```

_Note: If running in a Dev Container, click the link provided in the terminal to authenticate in your local browser._

### **3. Create and Push the Project**

Create a new Google Apps Script project linked to the `./src` directory and upload the codes.

```bash
clasp create --title "DocToMD" --rootDir ./src
clasp push
```

## **☁️ Deployment**

Once the code is pushed, you need to deploy it as a Web App.

1. Navigate to the [Google Apps Script Dashboard](https://script.google.com/home).

2. Locate and click on the project named **"DocToMD"**.

3. In the editor, click on the blue **Deploy** button in the top right corner.

4. Select **New deployment**.

5. Click the "Select type" (gear icon) and choose **Web app**.

6. Configure the following:

   - **Description:** (Optional, e.g., "Initial Deploy")

   - **Execute as:** `Me` (your email)

   - **Who has access:** `Anyone` (or `Myself` if you want it private)

7. Click **Deploy**.

8. Copy the **Web app URL** provided in the success message.

## **📖 Usage**

1. Open the **Web app URL** in your browser.

2. **Copy** your formatted text (from a Google Doc, website, or Word document).

3. **Paste** the text into the input area on the website.

4. Click the **Convert** (or specific action) button.

5. The text is converted to Markdown and automatically copied to your **pasteboard**.

6. Paste your new Markdown content wherever you need it!

## **📂 File Structure**

The project source code is located in the `src` directory to keep the root clean.

```
GS-DocToMD/
├── .devcontainer/
│   └── devcontainer.json  # Configuration for VS Code Dev Container
├── src/
│   ├── Code.js            # Server-side Google Apps Script logic
│   ├── index.html         # Main HTML structure for the Web App
│   ├── stylesheet.html    # CSS styles (included via include function)
│   ├── javascript.html    # Client-side JavaScript (logic for DOM & Clipboard)
│   └── appsscript.json    # Project manifest and configuration
├── .clasp.json            # Clasp configuration (generated after create)
├── demo.gif               # Demo animation
└── README.md              # Project documentation
```
