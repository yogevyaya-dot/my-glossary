---
title: "Git"
description: "A distributed version control system for tracking changes in source code during software development."
date: "2023-10-27"
---

**Git** is the industry-standard version control system. It allows multiple developers to work on the same project simultaneously without overwriting each other's work. It tracks every modification to the code in a special kind of database.

## How Git Works
Git works on a branching model. The main code lives in a branch (usually `main` or `master`). Developers create "feature branches" to work on new things. Once tested, these branches are "merged" back into the main code.

## Essential Commands
* `git init`: Starts a new repository.
* `git clone`: Copies a repository from a remote source.
* `git add`: Stages changes.
* `git commit`: Saves the staged changes with a message.
* `git push`: Uploads local commits to a remote server (like GitHub).

## Frequently Asked Questions

**1. What is the difference between Git and GitHub?**
**Git** is the software tool installed on your computer. **GitHub** is a cloud service that hosts Git repositories. Think of it like "MP3" (Git) vs "Spotify" (GitHub).

**2. What is a "Merge Conflict"?**
A conflict occurs when two developers change the exact same line of code in different ways. Git cannot decide which one is correct, so a human must resolve it manually.

**3. Is Git only for code?**
No, Git can track changes in any text files (like Markdown, TXT, CSV). However, it is not efficient for large binary files like videos or images.

**4. What does "Open Source" mean in relation to Git?**
Many projects hosted on GitHub are Open Source, meaning anyone can view the code, copy it, and suggest improvements via "Pull Requests".

**5. Can I undo a commit in Git?**
Yes. Commands like `git revert`, `git reset`, and `git checkout` allow you to go back in time to previous versions of your project if you made a mistake.