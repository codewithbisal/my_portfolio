import React, { useState, useEffect } from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import axios from "axios"; // Import Axios

export default function GithubRepoCard({ theme }) {
  const [repos, setRepos] = useState([]); // State to store fetched repositories

  useEffect(() => {
    // Fetch GitHub repositories when the component mounts
    axios
      .get("https://api.github.com/users/codewithbisal/repos") // Replace 'your-username' with your GitHub username
      .then((response) => {
        setRepos(response.data); // Update state with fetched repositories
      })
      .catch((error) => {
        console.error("Error fetching GitHub repositories:", error);
      });
  }, []);

  function openRepoInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      {repos.map((repo) => (
        <div
          className="repo-card-div"
          style={{ backgroundColor: theme.highlight }}
          key={repo.id}
          onClick={() => openRepoInNewTab(repo.html_url)}
        >
          <Fade bottom duration={2000} distance="40px">
            <div className="repo-name-div">
              <svg
                aria-hidden="true"
                className="octicon repo-svg"
                height="16"
                role="img"
                viewBox="0 0 12 16"
                width="12"
              >
                <path
                  fillRule="evenodd"
                  d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                ></path>
              </svg>
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
            </div>
            <p className="repo-description" style={{ color: theme.text }}>
              {repo.description}
            </p>
            <div className="repo-details">
              <p
                className="repo-creation-date subTitle"
                style={{ color: theme.secondaryText }}
              >
                Created on {new Date(repo.created_at).toLocaleDateString()}
              </p>
              <ProjectLanguages
                className="repo-languages"
                logos={repo.languages_url}
              />
            </div>
          </Fade>
        </div>
      ))}
    </div>
  );
}
