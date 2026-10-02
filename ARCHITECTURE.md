# End-to-End DevOps Pipeline Architecture

## Pipeline Flow Overview
1. **Developer (Git Push):** Code changes are pushed to the GitHub repository.
2. **CI Pipeline (Build & Test):** 
   - Code is checked out.
   - Vite project dependencies are installed (`npm install`) and the production build is created (`npm run build`).
   - The Docker image is built, tagged with the commit SHA, and pushed to the Docker Registry[cite: 1, 2].
3. **CD Pipeline - Staging (Automatic):** 
   - An Ansible playbook is automatically triggered, which updates the container on the staging server and runs health checks[cite: 1, 2].
4. **Approval Gate:** 
   - The pipeline pauses before production deployment to wait for manual approval[cite: 1, 2].
5. **CD Pipeline - Production (Manual):** 
   - Upon receiving approval, the rolling update is deployed to the production server via Ansible[cite: 1, 2].