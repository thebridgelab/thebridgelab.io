---
parent: GitHub Actions
---

# Common Github Actions

You can find our repository with common GitHub examples here:
[https://github.com/thebridgelab/common-github-actions](https://github.com/thebridgelab/common-github-actions)

# The Following Actions can be found in this repository:

### 1. **Angular Static Website Deployment - Test**

- **Purpose**: Test: Building and deploying of an Angular static site to an S3 bucket.
- **Triggers**: Pull requests involving changes to the relevant web directory.
- **Key Features**:
  - Installs Node.js and dependencies.
  - Configures AWS credentials.
  - Builds the application with a sandbox configuration.
  - Performs a dry-run deployment to the S3 bucket.

---

### 2. **Angular Static Website Deployment - Deployment**

- **Purpose**: Builds and deploys an Angular static site to an S3 bucket for the production environment.
- **Triggers**: Pull requests closed on the `release/prod` branch.
- **Key Features**:
  - Builds the application with a production configuration.
  - Deploys the build to the production S3 bucket.

---

### 3. **Run Some Shell Script**

- **Purpose**: Automates running a shell script for various tasks, such as checking Dependabot alerts.
- **Triggers**:
  - Scheduled to run daily at midnight UTC.
  - Manually via `workflow_dispatch`.
- **Key Features**:
  - Grants execution permissions for the script.
  - Runs a custom shell script with provided environment variables.
  - Store a script inside of your repo to be automatically run.

---

### 4. **Web Lint Check**

- **Purpose**: Ensures code quality by running linting checks on an Angular project.
- **Triggers**: Pull requests involving changes to the web directory.
- **Key Features**:
  - Installs Node.js and project dependencies.
  - Runs the `npm lint` command to check for issues.
  - Use this as a GitHub check.

---

### 5. **Terraform Format Check**

- **Purpose**: Validates proper formatting of Terraform files.
- **Triggers**: Pull requests for the repository.
- **Key Features**:
  - Runs `terraform fmt` to ensure consistent formatting.
  - Outputs differences if formatting issues are detected.
  - Use this as a GitHub check in terraform repos.

---

### 6. **API .NET Test**

- **Purpose**: Runs integration tests for a .NET API project.
- **Triggers**: Pull requests for the repository.
- **Key Features**:
  - Sets up a PostgreSQL database for integration testing.
  - Installs .NET Core and runs `dotnet test` to execute tests.

---

### 7. **Production API Deployment to AWS ECR**

- **Purpose**: Builds and deploys a Docker image for the API to Amazon ECR.
- **Triggers**: Closed pull requests on the `release/prod` branch.
- **Key Features**:
  - Builds and tags a Docker image.
  - Pushes the image to Amazon ECR.
  - Uses branch-specific tagging for release candidates.

---

### 8. **Snapshot and Restore Database**

- **Purpose**: Automates snapshot creation and restoration for an RDS database.
- **Triggers**: Manual execution via `workflow_dispatch`.
- **Key Features**:
  - Creates an RDS database snapshot.
  - Waits for the snapshot to be available.
  - Restores a new database instance from the snapshot.
  - Cleans up the snapshot after use.
