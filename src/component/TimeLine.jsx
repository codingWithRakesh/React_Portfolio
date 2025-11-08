import React, { useEffect, useState } from 'react'

const TimeLine = ({ nameProject }) => {
    const [timeframe, setTimeframe] = useState("");
    const extractOwnerRepo = (url) => {
        try {
            const parts = url.split('github.com/')[1].split('/');
            return { owner: parts[0], repo: parts[1] };
        } catch {
            return { owner: '', repo: '' };
        }
    };
    useEffect(() => {
        async function fetchCommits() {
            const { owner, repo } = extractOwnerRepo(nameProject.gitHub);
            try {
                const response = await fetch(
                    `https://api.github.com/repos/${owner}/${repo}/commits?per_page=100`
                );
                const data = await response.json();

                if (Array.isArray(data) && data.length > 0) {
                    const dates = data.map((commit) =>
                        new Date(commit.commit.author.date)
                    );

                    dates.sort((a, b) => a - b);

                    const startDate = dates[0];
                    const endDate = dates[dates.length - 1];

                    const formatDate = (date) =>
                        date.toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        });

                    setTimeframe(`${formatDate(startDate)} - ${formatDate(endDate)}`);
                } else {
                    setTimeframe(nameProject.Timeframe);
                }
            } catch (error) {
                console.error("Error fetching commits:", error);
                setTimeframe("Error loading timeframe");
            }
        }

        fetchCommits();
    }, [nameProject.gitHub, nameProject.Timeframe]);

    return (
        <div className="peragraph-video ">
            <p>
                <b> Timeframe : </b> {timeframe}
            </p>
        </div>
    )
}

export default TimeLine