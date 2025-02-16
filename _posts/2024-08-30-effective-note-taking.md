---
title: Effective Note Taking
---
##### TLDR
- For each project, keep your entire project diary in a simple editor like Textedit, Notepad.
- Aggressively bookmark project-related links.
- Segregate source code from business artifacts.

## Why Bother Knowing Things?
There comes a horrifying moment in a dev's career where they realize that they are the adult in the room. 

The expectation of competence from your superiors is by now a familiar dread, and these expectations are easily met: parrot the buzzwords, close the tickets, compliment the haircut, etc.

By contrast, the expectations of juniors force a potent adjustment of perspective. The expectations are completely unpredictable, in both schedule and subject matter. And while you likely only have one direct superior – you will likely have more than one junior, and they might all need help.

Further, every "I don't know" is logged – consciously or not – and enough of these microdisappointments will eventually tarnish the trust that the junior holds for you. Once last, it's much harder to regain the trust of a junior than that of a senior, because let's face it: subordinates are always fucking up.

For these reasons, the pressure to be regularly correct can be intense. Luckily, a good 80% of junior questions can be answered simply by paying attention in meetings and taking notes. In this article, we'll review my personal approach to these techniques, at the risk of stating the obvious and/or the outdated.

## Personal Project Log
My main tool is a single Notepad document with rich text disabled. I like to treat the project log akin to journaling with a pen, ie write-only.

For example
```
2024.08.28
example integration curl
curl -X POST -d '{ "Foo": "Bar" }' https://some-server.co/interesting-data

New devops guy!
Frank Sobotka
- Baltimore
- Hates terraform

2024.08.29
# localhost
API_HOST=https://localhost:7069/api
CLIENT_ID=456fc172-11dc-4aa3-9ac1-377e06a1bdef

# staging
API_HOST=https://localhost:7069/api
CLIENT_ID=7d18f6d6-95b6-4a93-aa55-33618ad4b052

2024.08.30
Bob Wireframes https://figma.com/bob/bobs-wireframe-link

Retro notes
- update README with https over localhost
- talk to Alice about leading next refinement

Client meet
- convention mid Sept – can we demo?

2024.09.05
// etc.
```

The formatting is inconsistent and ad hoc (outside of a natural chronological order) and **that's the point**. This is just a dumping ground for information as it comes, and should probably not be shared in the raw. The beauty of the single file is that even with the messiest project log, you can ctrl-F through it. 6 month old information will still be relevant to a new developer; hell, it'll be relevant to an old developer!

### Isn't this insecure?
If the sight of GUIDs in the above log tickled your cybie-sense, good! It's worth staying paranoid about the data you keep on your machine, and I ain't no cybersecurity expert. Likely the best solution for shared secrets would be some paid tool like 1password, Lastpass, etc. Of course [those tools come with their own risks](https://blog.lastpass.com/posts/notice-of-recent-security-incident).

So, let's game this out. You've got a plaintext file on your filesystem. So anyone who gains access to your user on your machine could read this file. Ideally you have a relatively aggressive idle timer set for your screen saver (< 10m), and of course you use password to unlock your machine.

For less-critical environments (eg Development/Staging); it's worth thinking through what kind of damage an attacker could wreak with a given secret. Often the answer is "minimal", and so I find that the utility of having these credentials at hand is worth the risk of storing these secrets in the project log.

I recently had the opportunity to work in the Microsoft stack, with SSO authentication via Azure across the entire project. This meant that we didn't have to keep any secret connection strings around; authorization was entirely mediated via our Azure identities.

## Link Hoarding
A good 1/4 of team questions are "what's that link" ?

In your browser of choice, collate your links under project-specific emoji groups. This allows you to pack more groups onto a small bookmarks bar, and obfuscates their purpose when you're sharing your screen.

Hoard links like a dragon, and keep them easily accessible.
- Repeated videoconferencing rituals (eg daily, retro)
- Project planning tools like JIRA, Azure Devops, Monday, etc.
- Repository hosting like Github, Gitlab, Azure Devops, etc.
- Specific screens in Figma; eg "Style Guide", "Mobile Spec", etc.

## Local Machine Filesystem
As a dev, my project work finds itself in four locations on my local machine:

- **code/MyProject** for whatever repositories are related to the project
- **Documents/MyProject** for anything that's not under version control; personal project log, SOWs, specifications, local copies of official project files, etc.
- **Desktop** typically for freshly-cut screenshots, screen recordings. I'll regularly archive these to **Documents/MyProject** or the Trash.
- **Downloads** for uncategorized downloads. These too get archived to **Documents/MyProject** or trashed regularly.

If you keep to a regular archiving schedule, then it's much easier to "move out" of your machine later; simply archive **Documents/MyProject**, and make sure your **code/MyProject** doesn't have uncommitted work.

Tools like Dropbox + iCloud are useful for backup, but not required. If you do choose to backup your Documents folder to the internet (eg the insidious OneDrive), **confirm that it's private**.

## Won't AI Take Care of This?
Tools like Notion AI, Glean, Guru, all promise personal assistants with the ability to search and summarize your documents – your personal notes, the knowledge base of your entire organization, etc.

In my experience, LLMs are great at describing TLAs and arcane industry terms. It's great for onboarding to a new project, especially if an LLM has ingested some contract documents – statements of work, etc. But once it gets down to the day-to-day of what the client said, or what the latest plan is, I haven't found a tool that replaces good ol' fashioned note-taking. John Henry over here.

LLMs are also to slow for flow. So while I might ask an LLM for a code snippet, information, et cetera; I would copy that response and keep it locally in the project log.

Finally, I simply hate regularly 2FA'ing into services, and if your employer is paranoid like mine, you're likely doing that a lot. I ain't never been asked to log into Textedit.

# In Conclusion
It's fair to characterize this approach as "organize your bookmarks and keep a journal", neither of which are particularly groundbreaking.

The spirit of this approach is aggressively capturing information as you come across it – URLs, connection strings, etc. When you are presented with information, you should ask yourself "how can I access this again?" And maybe later on, ask yourself "how can I access this faster?"
