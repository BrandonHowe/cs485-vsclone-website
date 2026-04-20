# VSClone Marketing Website

The marketing site for [VSClone](https://github.com/BrandonHowe/cs485-llm-ide), built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Deployed via AWS Amplify.

---

## For Web Users

The site is a static marketing page — just open it in any modern browser. There's nothing to install, no account to create, and no data is collected. Use the navigation to read about features, follow links to the VSClone GitHub repo, or download a release.

---

## For Developers: Running Locally

### Prerequisites

- [Bun](https://bun.sh) (this project uses bun — not npm/yarn/pnpm)
- Node.js 20+ (for tooling compatibility)

### Install and run

```bash
git clone https://github.com/BrandonHowe/website-vsclone.git
cd website-vsclone
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
bun run build   # production build
bun run start   # serve the production build
bun run lint    # run eslint
```

---

## For Forkers: Deploying to AWS Amplify

This repo is wired up to deploy automatically to AWS Amplify on every push to `main`, via the GitHub Actions workflow at `.github/workflows/deploy-aws-amplify.yml`. To deploy your own fork, follow the steps below.

### 1. Create an AWS account

If you don't already have one, sign up at [aws.amazon.com](https://aws.amazon.com/). A credit card is required, but Amplify has a generous free tier for small sites.

### 2. Create an Amplify app

1. Sign in to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/).
2. Click **Create new app** → **Host web app**.
3. Choose **GitHub** as the source and authorize AWS Amplify to access your fork.
4. Select your forked repository and the `main` branch.
5. On the build settings screen, Amplify should auto-detect the `amplify.yml` file in the repo root. Leave it as-is — it installs bun, runs `bun install`, and builds with `bun run build`.
6. Click **Save and deploy**. Wait for the first deployment to finish (3–5 minutes).
7. Once it's live, copy the **App ID** from the Amplify app's **General settings** page — you'll need it in step 4.

### 3. Create an IAM user for GitHub Actions

The GitHub Actions workflow needs AWS credentials to trigger Amplify deploys.

1. Go to the [IAM Console](https://console.aws.amazon.com/iam/) → **Users** → **Create user**.
2. Give the user a name (e.g., `github-actions-amplify`).
3. Attach a policy with permission to call `amplify:StartJob`. The simplest approach is to create an inline policy:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": "amplify:StartJob",
         "Resource": "arn:aws:amplify:*:*:apps/<YOUR_APP_ID>/branches/main/jobs/*"
       }
     ]
   }
   ```

   Replace `<YOUR_APP_ID>` with the App ID from step 2.
4. After creating the user, open it and go to **Security credentials** → **Create access key** → choose **Application running outside AWS**. Save the **Access key ID** and **Secret access key** — you'll need them next.

### 4. Add GitHub repository secrets

In your forked GitHub repo, go to **Settings** → **Secrets and variables** → **Actions** → **New repository secret**, and add the following four secrets:

| Secret name             | Value                                             |
| ----------------------- | ------------------------------------------------- |
| `AWS_ACCESS_KEY_ID`     | The access key ID from step 3                     |
| `AWS_SECRET_ACCESS_KEY` | The secret access key from step 3                 |
| `AWS_REGION`            | The region your Amplify app lives in (e.g., `us-east-1`) |
| `AMPLIFY_APP_ID`        | The App ID from step 2                            |

### 5. Push to `main`

Push any commit to the `main` branch of your fork. The GitHub Actions workflow will:

1. Install bun and build the site (as a sanity check).
2. Call `aws amplify start-job` to trigger an Amplify release deployment.

Watch the run in the **Actions** tab of your GitHub repo, and watch the deploy progress in the Amplify console.

### 6. (Optional) Add a custom domain

In the Amplify console, open your app → **Hosting** → **Custom domains** → **Add domain**. Amplify will walk you through DNS setup and issue a free SSL certificate via AWS Certificate Manager.

---

## Project Structure

```
src/
  app/           # Next.js App Router pages and layout
  components/    # React components (Hero, CTA, Footer, Navbar, etc.)
public/          # Static assets (favicon, images)
amplify.yml      # AWS Amplify build spec
.github/
  workflows/
    deploy-aws-amplify.yml   # GitHub Actions → Amplify trigger
```

## License

See [LICENSE](https://github.com/BrandonHowe/cs485-llm-ide/blob/main/LICENSE) in the main VSClone repo.
