---
parent: GitHub Actions
---

# Creating Workflows

Workflows are YAML configuration files stored in the `.github/workflows/` directory of your repository. Here's an example of a basic workflow:

```yaml
name: CI Workflow
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Run a script
        run: echo "Hello, GitHub Actions!"
```
Copy this to your .github/workflows folder (if it doesn't exist create it), and you are good to go.