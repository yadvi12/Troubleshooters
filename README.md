# Team Troubleshooters Initiative - Election Buddy

![Love](https://img.shields.io/badge/Made%20with-Magic-orange?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTM5NS44MiAxODIuNjE2LTE4OC43MiAxODguNzItMTIuOTEgMS43Mi05LjM1IDIwLjU0LTM0LjMxIDM0LjMxLTExLjAxLS43My0xMS4yNSAyMi45OS01Ni40OCA1Ni40OGMtMi45MyAyLjkzLTYuNzcgNC4zOS0xMC42MSA0LjM5cy03LjY4LTEuNDYtMTAuNjEtNC4zOWwtMjIuNjItMjIuNjJoLS4wMWwtMjIuNjItMjIuNjNjLTUuODYtNS44Ni01Ljg2LTE1LjM2IDAtMjEuMjJsNzcuNjMtNzcuNjMgMTYuNi03LjAzIDUuNjYtMTUuMjMgMzQuMzEtMzQuMzEgMTQuODQtNC45MiA3LjQyLTE3LjM0IDE2Ny41Ny0xNjcuNTcgMzMuMjQgMzMuMjR6IiBmaWxsPSIjZjY2Ii8+PHBhdGggZD0ibTM5NS44MiAxMTYuMTQ2djY2LjQ3bC0xODguNzIgMTg4LjcyLTEyLjkxIDEuNzItOS4zNSAyMC41NC0zNC4zMSAzNC4zMS0xMS4wMS0uNzMtMTEuMjUgMjIuOTktNTYuNDggNTYuNDhjLTIuOTMgMi45My02Ljc3IDQuMzktMTAuNjEgNC4zOXMtNy42OC0xLjQ2LTEwLjYxLTQuMzlsLTIyLjYyLTIyLjYyIDMzNC42NC0zMzQuNjR6IiBmaWxsPSIjZTYyZTZiIi8+PHBhdGggZD0ibTUwNi42MSAyMDkuMDA2LTY5LjE0LTY5LjEzIDQzLjA1LTg4LjM4YzIuOC01Ljc1IDEuNjUtMTIuNjUtMi44OC0xNy4xNy00LjUyLTQuNTMtMTEuNDItNS42OC0xNy4xNy0yLjg4bC04OC4zOCA0My4wNS02OS4xMy02OS4xNGMtNC4zNS00LjM1LTEwLjkyLTUuNi0xNi41Ni0zLjE2LTUuNjUgMi40NS05LjIzIDguMDktOS4wNCAxNC4yNGwyLjg2IDkwLjQ1LTg1LjM3IDU3LjgzYy00LjkxIDMuMzItNy40IDkuMjItNi4zNiAxNS4wNCAxLjA0IDUuODMgNS40IDEwLjUxIDExLjE1IDExLjk0bDk2LjYyIDI0LjAxIDI0LjAxIDk2LjYyYzEuNDMgNS43NSA2LjExIDEwLjExIDExLjk0IDExLjE1Ljg3LjE2IDEuNzUuMjMgMi42Mi4yMyA0LjkyIDAgOS42LTIuNDIgMTIuNDItNi41OWw1Ny44My04NS4zNyA5MC40NSAyLjg2YzYuMTQuMTkgMTEuNzktMy4zOSAxNC4yNC05LjA0IDIuNDQtNS42NCAxLjE5LTEyLjIxLTMuMTYtMTYuNTZ6IiBmaWxsPSIjZmFiZTJjIi8+PHBhdGggZD0ibTI5Ni4yNiAyMTUuNzA2IDI0LjAxIDk2LjYyYzEuNDMgNS43NSA2LjExIDEwLjExIDExLjk0IDExLjE1Ljg3LjE2IDEuNzUuMjMgMi42Mi4yMyA0LjkyIDAgOS42LTIuNDIgMTIuNDItNi41OWw1Ny44My04NS4zNyA5MC40NSAyLjg2YzYuMTQuMTkgMTEuNzktMy4zOSAxNC4yNC05LjA0IDIuNDQtNS42NCAxLjE5LTEyLjIxLTMuMTYtMTYuNTZsLTY5LjE0LTY5LjEzIDQzLjA1LTg4LjM4YzIuOC01Ljc1IDEuNjUtMTIuNjUtMi44OC0xNy4xN3oiIGZpbGw9IiNmZDkwMjUiLz48cGF0aCBkPSJtNDY1IDQxNi45NjZjLTI1LjkyIDAtNDcgMjEuMDgtNDcgNDdzMjEuMDggNDcgNDcgNDcgNDctMjEuMDggNDctNDctMjEuMDgtNDctNDctNDd6IiBmaWxsPSIjZmFiZTJjIi8+PHBhdGggZD0ibTEwNCAyOC45NjZoLTEzdi0xM2MwLTguMjg0LTYuNzE2LTE1LTE1LTE1cy0xNSA2LjcxNi0xNSAxNXYxM2gtMTNjLTguMjg0IDAtMTUgNi43MTYtMTUgMTVzNi43MTYgMTUgMTUgMTVoMTN2MTNjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNiAxNS0xNXYtMTNoMTNjOC4yODQgMCAxNS02LjcxNiAxNS0xNXMtNi43MTYtMTUtMTUtMTV6IiBmaWxsPSIjZmVkODQzIi8+PHBhdGggZD0ibTIwNy4xIDM3MS4zMzYtMjIuMjYgMjIuMjYtNDUuMzItODcuNjIgMjIuMjYtMjIuMjZ6IiBmaWxsPSIjZmVkODQzIi8+PHBhdGggZD0ibTE4NC44NCAzOTMuNTk2IDIyLjI2LTIyLjI2LTIyLjY2LTQzLjgxLTIyLjI2NSAyMi4yNjV6IiBmaWxsPSIjZmFiZTJjIi8+PHBhdGggZD0ibTE1MC41MyA0MjcuOTA2LTIyLjI2IDIyLjI2LTQ1LjMyLTg3LjYyIDIyLjI2LTIyLjI2eiIgZmlsbD0iI2ZlZDg0MyIvPjxwYXRoIGQ9Im0xMjguMjcgNDUwLjE2NiAyMi4yNi0yMi4yNi0yMi42NTUtNDMuODE1LTIyLjI2IDIyLjI2eiIgZmlsbD0iI2ZhYmUyYyIvPjxjaXJjbGUgY3g9IjE1IiBjeT0iMTE5Ljk2OSIgZmlsbD0iIzVlZDhkMyIgcj0iMTUiLz48Y2lyY2xlIGN4PSIxMjgiIGN5PSIxOTkuOTY5IiBmaWxsPSIjZDU5OWVkIiByPSIxNSIvPjxjaXJjbGUgY3g9IjE5MiIgY3k9IjYzLjk2NCIgZmlsbD0iI2Y2NiIgcj0iMTUiLz48Y2lyY2xlIGN4PSIzMjgiIGN5PSI0MTUuOTY3IiBmaWxsPSIjMzFiZWJlIiByPSIxNSIvPjxjaXJjbGUgY3g9IjQ0MCIgY3k9IjMyNy45NjciIGZpbGw9IiNhZDc3ZTMiIHI9IjE0Ljk5OSIvPjwvZz48L3N2Zz4=)


## Problem Statement:

⮞ In any country democratic voting is the most important event that allow its citizens to exercise their power by voting and electing their representatives. And to protect this right of the citizens, conducting fair elections is the basic prerequisite for any country. 
<br>
⮞ In a democratic system, **every vote counts**. But still many adult citizens don't go to cast their votes on election day. They may be out of town or may be they feel the voting center is too far. 
<br>
⮞ Replacement of this system is necessary to limit the voting frauds and to make the voting as well as counting process more transparent. Further a system is required that makes voting more convenient for the voters a system that minimizes the cost of conducting elections as money spent on national elections is huge. A system which allows us to vote even when we are traveling abroad or are not present in our home state. 

## Solution:

⮞ The Internet voting system tends to maximize user participation, by allowing them to vote from anywhere and allowing access from different computer systems and from any device that has an internet connection. Voting on the Internet provides a safe and private channel that allows all users to participate on equal terms. 
<br>
⮞ Increased accessibility for residents abroad and for persons with difficulties in travelling or reduced mobility. This also has a positive impact on the final turnout and therefore on the legitimacy of the election. 
<br>
⮞ The reduction in organizational and implementation costs significantly increases the efficiency of election management compared to the offline voting system.

## Technologies used:
- Node.js
- HTML
- CSS
- Javascript
- MongoDB
- Bootstrap
- EJS

## How to get started?

⮞ Open the CMD in windows.
<br>
⮞ Change the current working directory to the location where you have the cloned directory.
<br>
⮞ Type git clone, and then paste the URL you copied earlier.

```sh
git clone [URL]
```

⮞ Now run `npm install` to install all the node packages.

```sh
npm install
```

⮞ And then run the following command to start the web-UI in development mode. 

```sh
nodemon app.js
```
⮞ Open ***http://localhost:3000*** to view it in the browser.
```sh
port:3000
```

## Community and Contributions:
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change. Please note we have a code of conduct, follow it in all your interactions with the project.

## Found a Bug? Missing a specific feature?

Feel free to **file a new issue** with a respective title and description on the repository. If you already found a solution to your problem, **we would love to review your pull request**! Have a look at our [contribution guidelines](https://github.com/yadvi12/Troubleshooters/blob/main/CONTRIBUTING.md) to find out about our coding standards.

## License:
The Project is released under the terms of the [MIT License](LICENSE).

</br>
</br>

<div align="center">
    <a href="https://allcontributors.org">
        <img width="30%" height="50%" src="/images/contribute.svg" alt="✨ All Contributors ✨" width="800px" />
    </a>
</div>

</br>
<div align="center">
<table>
  <tr align = "center">
       <td align="center"><a href="https://github.com/snehasunilnair"><img src="/images/WhatsApp Image 2021-05-02 at 11.04.54 AM.jpeg" width="220px" height="210px" alt=""/><br /><sub><b>SNEHA SUNIL</b></sub></a><br /><p align="center">
    
   <a href="https://www.linkedin.com/in/snehasunil/" alt="Linkedin"><img src="https://raw.githubusercontent.com/jayehernandez/jayehernandez/3f5402efef9a0ae89211a6e04609558e862ca616/readme/linkedin-fill.svg"></a>
    <a href="mailto:ss4795@srmist.edu.in" alt="Contact me"><img src="https://raw.githubusercontent.com/jayehernandez/jayehernandez/3f5402efef9a0ae89211a6e04609558e862ca616/readme/mail-fill.svg"></a>
   
  </p>
</td>
      
   <td align="center"><a href="https://github.com/yadvi12"><img src="/images/WhatsApp Image 2021-04-30 at 7.14.36 PM.jpeg" width="220px;" height="210px;" alt=""/><br /><sub><b>YADVI BHALLA</b></sub></a><br />
    <p align="center">
   
   <a href="https://www.linkedin.com/in/yadvibhalla1210" alt="Linkedin"><img src="https://raw.githubusercontent.com/jayehernandez/jayehernandez/3f5402efef9a0ae89211a6e04609558e862ca616/readme/linkedin-fill.svg"></a>
    <a href="mailto:yadvibhalla2002@gmail.com" alt="Contact me"><img src="https://raw.githubusercontent.com/jayehernandez/jayehernandez/3f5402efef9a0ae89211a6e04609558e862ca616/readme/mail-fill.svg"></a>
   
  </p>

</td>

 <td align="center"><a href="https://github.com/Annanya481"><img src="/images/" width="220px" height="210px" alt=""/><br /><sub><b>ANNANYA PANDEY</b></sub></a><br /><p align="center">
    
   <a href="https://www.linkedin.com/in/annanya-pandey-7a9043195/" alt="Linkedin"><img src="https://raw.githubusercontent.com/jayehernandez/jayehernandez/3f5402efef9a0ae89211a6e04609558e862ca616/readme/linkedin-fill.svg"></a>
    <a href="mailto:" alt="Contact me"><img src="https://raw.githubusercontent.com/jayehernandez/jayehernandez/3f5402efef9a0ae89211a6e04609558e862ca616/readme/mail-fill.svg"></a>
   
  </p>
</td>

   
   
  </tr>
  </table>
  </div>
