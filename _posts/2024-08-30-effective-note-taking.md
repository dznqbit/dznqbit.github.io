---
title: Effective Note Taking
---
Some cats out there, you can ask them any flavor of question:

- "Who is Frank Sobotka? I saw he completed ILA-123"
- "Where are the wireframes Bob was showing us yesterday?"
- "I heard the client talking about a BOPUS server? Is that some AI thing?"
- "Why did Alice add `accessToken` as a method argument to these `ISharepointRepository` methods?"
- "What's the connection string to the staging database?"
- "Do you have a meeting link for daily?"

And sure enough they have the answer. You might, then, ask yourself a different question:

"How did they answer that question so fast?"

Your coworkers do not have these answers memorized. Nay, these devs are relying on a technique called "taking notes". In this article, we're going to learn how to answer some of these questions.

## Link Hoarding
In the era of distributed teams, internet-accessible resources are a must; and normally, those resources are available via URLs. Hoard these links like a dragon, and keep them easily accessible.

Likely candidates include:
- Repeated videoconferencing rituals (eg daily, retro)
- Project planning tools like JIRA, Azure Devops, Monday, etc.
- Repository hosting like Github, Gitlab, Azure Devops, etc.
- Specific screens in Figma; eg "Style Guide", "Mobile Spec", etc.

### Emoji Bookmark Groups
Collate your links under project-specific emoji groups. This allows you to pack more groups onto a small bookmarks bar, and obfuscates their purpose when you're sharing your screen.

## Personal Project Log
A single Notepad document with rich text disabled. I like to treat the project log akin to journaling with a pen; ie you can write new information, you can delete old information (by scratching out); but don't bother editing – ie, avoid the urge to maintain some structured document in the log.

For example
```
2024.08.29
example integration curl
curl -X POST -d '{ "Foo": "Bar" }' https://some-server.co/interesting-data

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

2024.09.05
// etc.
```

The the formatting is inconsistent and ad hoc (outside of a natural chronological order) and that's the point. This is just a dumping ground for information as it comes, and should probably not be shared in the raw. But when your team members inevitably come knocking with questions, all you need to do is ctrl-F through your log to find the relevant info.

### Isn't this insecure?
Well, it's a plaintext file on your filesystem. So anyone who gains access to your user on your machine could read this file. Ideally you have a relatively aggressive idle timer set for your screen saver (< 10m), and of course you use password to unlock your machine.

Even with these rudiments It's worth staying paranoid about the data you keep on your machine. Production secrets should absolutely not be kept on your dev machine. Just don't do it. 

Less-critical environments (eg Development/Staging); it's worth thinking through what kind of damage an attacker could wreak with a given secret. Often the answer is "minimal", and so I find it's worth the risk of storing these secrets in the project log.

I recently had the opportunity to work in the Microsoft stack, with SSO authentication via Azure across the entire project. This meant that we didn't have to keep any secret connection strings around; authorization was entirely mediated via our Azure identities.

## Local Machine Filesystem
As a dev, my project work finds itself in four locations on my local machine:

- **code/MyProject** for whatever repositories are related to the project
- **Documents/MyProject** for anything that's not under version control; personal project log, SOWs, specifications, local copies of official project files, etc.
- **Desktop** typically for freshly-cut screenshots, screen recordings. I'll regularly archive these to **Documents/MyProject** or the Trash.
- **Downloads** for uncategorized downloads. These too get archived to **Documents/MyProject** or trashed regularly.

If you keep to a regular archiving schedule, then it's much easier to "move out" of your machine later; simply archive **Documents/MyProject**, and make sure your **code/MyProject** doesn't have uncommitted work.

Tools like Dropbox + iCloud are useful for backup, but not required. If you do choose to backup your Documents folder on the web, ensure that it's private.

## Won't AI Take Care of This?
Tools like Notion AI, Glean, Guru, all promise personal assistants with the ability to search your company's entire document base without breaking flow.

These tools shine when generally onboarding to a completely new project. In my experience, LLMs are great at describing TLAs and arcane industry terms. But once it gets down to gossiping about who said what, or where such file was, 

LLMs are also to slow for flow. So while I might ask an LLM for a code snippet, information, et cetera; I would copy that response and keep it locally in the project log.

# In Conclusion
It's fair to characterize this approach as "organize your bookmarks and keep a journal", neither of which are particularly groundbreaking.

The spirit of this approach is aggressively capturing information as you come across it – URLs, connection strings, etc. When you are presented with information, you should ask yourself "how can I access this again?" And maybe later on, ask yourself "how can I access this faster?"
