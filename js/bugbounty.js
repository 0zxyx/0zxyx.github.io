function generateLink() {
    const userInput = document.getElementById('userinput').value;
    const selectedWebsite = document.getElementById('websiteSelect').value;
    const linkContainer = document.getElementById('linkContainer');
    const sanitize = userInput.replace(/[^a-zA-Z0-9.-]/g, '');
    linkContainer.innerHTML = '';

    const sanitizedInput = encodeURIComponent(sanitize);

    fetch('/data/bugbounty.json')
        .then(response => response.json())
        .then(data => {
            const selectedLinks = data[selectedWebsite];

            selectedLinks.forEach(item => {
                let urlWithInput;

                if (selectedWebsite === "Google") {
                    urlWithInput = `https://www.google.com/search?q=${encodeURIComponent(item.query.replace('targetDomain', sanitizedInput))}`;
                } else if (selectedWebsite === "Github") {
                    urlWithInput = `https://github.com/search?q=${encodeURIComponent(item.query.replace('targetDomain', sanitizedInput))}`;
                } else if (selectedWebsite === "Gist") {
                    urlWithInput = `https://gist.github.com/search?q=${encodeURIComponent(item.query.replace('targetDomain', sanitizedInput))}`;
	    } else if (selectedWebsite === "Shodan") {
                    urlWithInput = `https://www.shodan.io/search?query=${encodeURIComponent(item.query.replace('targetDomain', sanitizedInput))}`;
	    }
		    else if (selectedWebsite === "FOFA") {
			    const query = item.query.replace('targetDomain', sanitizedInput);
			    //const encodedQuery = encodeURIComponent(query);
			    //const base64EncodedQuery = btoa(encodedQuery);
			    const base64EncodedQuery = btoa(query);
			    urlWithInput = `https://en.fofa.info/result?qbase64=${base64EncodedQuery}`;
		   } else if (selectedWebsite === "UrlScan") {
                    urlWithInput = `https://urlscan.io/search/#${encodeURIComponent(item.query.replace('targetDomain', sanitizedInput))}`;
	    }

		    else if (selectedWebsite === "SubDomain") {
			    urlWithInput = item.query.replace('targetDomain', encodeURIComponent(sanitizedInput));
	    }
		    else if (selectedWebsite === "SourceCode") {
			    urlWithInput = item.query.replace('targetDomain', encodeURIComponent(sanitizedInput));
	    }
		    else if (selectedWebsite === "NetworkIntelligence") {
			    urlWithInput = item.query.replace('targetDomain', encodeURIComponent(sanitizedInput));
	    }
		    else if (selectedWebsite === "WebSecurity") {
			    urlWithInput = item.query.replace('targetDomain', encodeURIComponent(sanitizedInput));
	    }
		    else if (selectedWebsite === "WaybackMachine") {
			    urlWithInput = item.query.replace('targetDomain', encodeURIComponent(sanitizedInput));
	    }
		    else if (selectedWebsite === "URL") {
			    urlWithInput = item.query.replace('targetDomain', encodeURIComponent(sanitizedInput));
	    }
		    else if (selectedWebsite === "CMSDetect") {
			    urlWithInput = item.query.replace('targetDomain', encodeURIComponent(sanitizedInput));
	    }
		    else if (selectedWebsite === "CVE") {
			    urlWithInput = item.query.replace('targetDomain', encodeURIComponent(sanitizedInput));
	    }
		    else if (selectedWebsite === "Yandex") {
			    urlWithInput = item.query.replace('targetDomain', encodeURIComponent(sanitizedInput));
	    }
		    else if (selectedWebsite === "Openbugbounty") {
			    urlWithInput = item.query.replace('targetDomain', encodeURIComponent(sanitizedInput));
	    }
		    else if (selectedWebsite === "Reddit") {
			    urlWithInput = item.query.replace('targetDomain', encodeURIComponent(sanitizedInput));
	    }
		    else if (selectedWebsite === "Youtube") {
			    urlWithInput = item.query.replace('targetDomain', encodeURIComponent(sanitizedInput));
	    }

                const button = document.createElement('a');
                button.classList.add('link-button');
                button.href = urlWithInput;
                button.target = "_blank";
                button.textContent = item.displayname;
                linkContainer.appendChild(button);
            });
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
}

