module.exports = {

  path: './README.md',

  sections: [
    {
      title: 'Setting up your computer',
      links: [
        {text: "Chrome - A Web Browser", url: "./Development Environment/Chrome.md"},
        {text: "Slack for communication", url: "./Development Environment/Slack.md"},
        {text: "Atom - A Text Editor", url: "./Development Environment/Atom.md"},
        {text: "Terminal", url: "./Development Environment/Terminal.md)"},
        {
          text: "A nice shell such as...",
          links: [
            {text: "ZSH", url: "./Development Environment/Shells/ZSH.md"},
            {text: "OR Fish", url: "./Development Environment/Shells/Fish.md"},
          ]
        },
        {text: "Homebrew - A Package Manager", url: "./Development Environment/Homebrew.md"},
        {text: "Git - A Version Control System", url: "./Development Environment/Git.md"},
        {text: "Node - A JavaScript Environment", url: "./Development Environment/Node.md"},
        {text: "Environment Variables for productivity", url: "./Development Environment/Environment Variables.md"},
        {text: "A Window Manager for quickly moving windows around", url: "./Development Environment/Window Managers.md"},
        {text: "Password Manager to securely store passwords", url: "./Development Environment/Password Manager.md"},
        {text: "Optional Additional Tools (if you want to geek out)", url: "./Development Environment/Additional Tools.md"},
        {text: "Workspace Folder for organization", url: "./Development Environment/Workspace.md"},
      ]
    },
    {
      title: 'Test out your setup',
      links: [
        {text: "Deploy a Web App with Surge", url: "./Deployment/Surge.md)"},
      ]
    }
  ]

};
