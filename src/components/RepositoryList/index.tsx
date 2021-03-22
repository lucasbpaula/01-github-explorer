import React, { useEffect, useState } from "react";
import "../../styles/repositories.scss";
import RepositoryItem from "../RepositoryItem";

interface Repository {
  name: string,
  description: string,
  html_url: string 
}

export default function RespositoryList() {
  const [repoList, setRepoList] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/lucasbpaula/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepoList(data);
      });
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repos</h1>

      <ul>
        {repoList.map((repo) => (
          <RepositoryItem repository={repo} key={repo.name} />
        ))}
      </ul>
    </section>
  );
}
