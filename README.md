## Javascript Snippets / Bookmarklets Repo
- [x] Identify how to use GitHub as a CDN 
- [ ] Identify how to load external JS


---

### Use GitHub Repo as CDN

1. The base URL is `https://cdn.jsdelivr.net/gh/{username}/{repo}/`, where you replace *{username}* with the GitHub username and *{repo}* with the repository name for the project.

2. Append that URL with the path to the file you want to access in the project. For example, for my [Atomic XHR plugin](https://github.com/cferdinandi/atomic), the JavaScript file is located in the /dist directory. You’d use this:
   - **GitHub Link:** `https://github.com/cferdinandi/atomic/blob/master/dist/atomic.js`
   - **Script Tag:** `<script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic/dist/atomic.js"></script>`
   
3. You can also take advantage of semantic versioning by adding ***@{version-number}*** to the repository name. You can target major, minor, and patch releases as desired.
```
<!-- Always get the latest version -->
<!-- Not recommended for production sites! -->
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic/dist/atomic.js"></script>

<!-- Get minor updates and patch fixes within a major version -->
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic@4/dist/atomic.js"></script>

<!-- Get patch fixes within a minor version -->
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic@4.0/dist/atomic.js"></script>

<!-- Get a specific version -->
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/atomic@4.0.0/dist/atomic.js"></script>
```
##### Sources:
*How to turn any GitHub repo into a CDN | Go Make Things*
https://web.archive.org/web/20191105083227/https://gomakethings.com/how-to-turn-any-github-repo-into-a-cdn/



##### Interesting/Related Links:
*How to Host Files Using Google Drive*
https://web.archive.org/web/20191105083307/https://smashballoon.com/instagram-feed/standalone/docs/host-on-google-drive/

===

### Load External JS in Bookmarklet

***No working guide found... yet***
