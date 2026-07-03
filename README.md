# laim.github.io

Source code for https://laim.scot.  This repo has been private for years but I decided to open-source the site, but not the content.  All content is hosted on a private repo but by cloning this repo and adding some missing directories, you should be able to run this easily.

## Usage

- Clone the Repo
- Add `_posts` and `projects`
- Build

### Example Post

`Filename`: 2026-06-16-example.md

```
---
layout: post
title: 'Example Post'
author: Your Name
category: Tutorial
tags:
- tag1
- tag2
description: "Description about the post"
date: 2026-06-16T21:45:00.0000000+01:00
post-image: "2026/configure-arr-stack.png"
---

Hello World!

```

### Example Project

`Filename`: projectname.md

```
---
project_id:         1
title:              laim.github.io
download:           https://github.com/laim/laim.github.io
download-title:     "Download on GitHub"
language:           "Jekyll"
initial-release:    2027-07-03
description:        Personal website of Laim
status:             ""
license:            "GPL-3.0"
---

Hello World!

```