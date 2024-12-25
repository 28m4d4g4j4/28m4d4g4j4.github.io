document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const promptText = '<span class="prompt-text">M4D4Gaja@website:~$ </span>';
    let commandHistory = [];
    let historyIndex = 0;


    function displayBanner() {
        const bannerMessage = [
            "Welcome to my web portfolio",
            "To summon the magical command list, simply cast 'help' where cursor is blinking",
            "",
           "  __  __  __  ____    __    ___    __     ____   __ ",   
           " (  \/  )/. |(  _ \  /. |  / __)  /__\   (_  _) /__\ ",  
           "  )    ((_  _))(_) )(_  _)( (_-. /(__)\ .-_)(  /(__)\ ", 
           " (_/\/\_) (_)(____/   (_)  \___/(__)(__)\____)(__)(__) ",
                             
                             
        ];
    
        typeOutResponse(bannerMessage);
    }
    function displayCertifications() {
        const certifications = [
            "1. Android Bug Hunting by EC-Council",
            "2. SQL Injection Attacks and Defence Certification",
            "3. ISEA Digital Certificate",
            "4. Network Defence Essentials by EC-Council"
        ];
    
        const downloadableCert = [
            '<a href="BBP_AK.png" target="_blank">Download ABH Certificate</a>' // Update the path to your certificate
        ];
    
        // Combine certifications and downloadable link
        const fullOutput = [...certifications, "", ...downloadableCert];
    
        typeOutResponse(fullOutput);
    }
    function displayProjects() {
        const projects = [
            "1. Abhimanyu - Tool for fetching and displaying URLs related to a given domain.",
            "2. Babruvahana - Tool for finding sensitive information embedded in JavaScript files and extracting valuable data from HTML content.",
            "3. Avad - Multi-threaded tool designed for scanning directories on web servers.",
            "4. Avok - Simple network scanning tool designed to help users identify open ports on target hosts.",
            "",
            '<a href="https://github.com/M4D4Gaja" target="_blank">Visit my GitHub for more projects.</a>' 
        ];
    
        typeOutResponse(projects);
    }

    function displayEmail() {
        const emailInfo = [
            'You can reach me at: ',
            '<a href="mailto:M4D4Gaja@proton.me">M4D4Gaja@proton.me</a>'
        ];
    
        typeOutResponse(emailInfo);
    }
    
    
    const instagram = "https://instagram.com/p";
    const twitter = "https://twitter.com/parthax22";
    const linkedin = "https://linkedin.com/in/parthasec";
    const github = "https://github.com/M4D4Gaja";

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = input.value;
            commandHistory.push(command);
            historyIndex = commandHistory.length;
            output.innerHTML += `<div>${promptText}${command}</div>`;
            processCommand(command);
            input.value = '';
        } else if (event.key === 'ArrowUp') {
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            }
        } else if (event.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                input.value = '';
            }
        }
    });


    function processCommand(command) {
        let response;
        switch (command.toLowerCase()) {
            case 'help':
                response = [
                    '<span class="command">>help</span>          - Get how to know ',
                    '<span class="command">>whoami</span>        - Know about me',
                    '<span class="command">>resume/cv</span>     - Want to hire me? view/download my CV',
                    '<span class="command">>cert</span>          - View all certificates',
                    '<span class="command">>social</span>        - My socials OR type ',
                    '<span class="command">>projects</span>      - Some security tools',
                    '<span class="command">>email</span>         - Let\'s connect',
                    '<span class="command">>banner</span>        - Display the header',
                    '<span class="command">>clear</span>         - breathe out',
                    '<span class="command">>history</span>       - Let\'s see what you\'ve been up to'
                ];
                break;
            case 'whoami':
                response = [
                    "Hi, my name is M4D4Gaja.",
                    "I'm a self-learned Ethical Hacker, Bug Bounty Hunter and a Security Researcher with a strong interest in malware development, bug hunting, SaaS apps.",
                    "Having expertise in advanced Web/Network/API testing with major industry tools like Burp Suite Pro, Metasploit, Nmap, Nessus, Wireshark.",
                    "<br><strong>Skills</strong>",
                    "   - Web/Network/API pentesting",
                    "   - Vulnerability assessment",
                    "   - BlackBox Testing",
                    "   - Bash Automation",
                    "   - OWASP top 10",
                    "   - Linux",
                    "   - Bash",
                    "   - x64 Architecture",
                    "   - Malware Development",
                    "<br><strong>Tools</strong>",
                    "   - Burp Suite",
                    "   - Metasploit",
                    "   - Nmap",
                    "   - Wireshark",
                    "   - Tenable Nessus",
                    "   - Docker",
                    "<br><strong>Achievements</strong>",
                    "   - Secured companies like OpenSea, Microsoft, Priceline Other Confidential Websites.",
                    "   - Researching on CVE-2024-30103",
                    "<br><strong>Works/tools</strong>",
                    "   - Abhimanyu - tool for fetching and displaying URLs related to a given domain",
                    "   - Babruvahana - to find sensitive information embedded in JavaScript files and extract valuable data from HTML content",
                    "   - Avad - multi-threaded tool designed for scanning directories on web servers.",
                    "   - Avok - a simple network scanning tool designed to help users identify open ports on target hosts",
                    "<br><strong>Interests</strong>",
                    "   - Bug hunting",
                    "   - Automation script creation",
                    "   - Malware Development",
                    "<br><strong>Other Skills</strong>",
                    "   - Graphic design",
                    "   - Video + Photo editing",
                    "   - Adobe tools: Photoshop, Illustrator, Premier Pro, Lightroom, After Effects",
                    "<br><strong>Hands on Operating Systems</strong>",
                    "   - Windows",
                    "   - Mac",
                    "   - Linux",
                    "   - Android"
                ];
                break;
            case 'resume':
            case 'cv':
                response = [`You can download my CV here: <a href="MyCV.pdf" target="_blank">Download CV</a>`];
                break;
            case 'cert':
                response = displayCertifications();
                break;
            case 'social':
                response = [
                    `<a href="${instagram}" target="_blank">    - Instagram.com/</a>`,
                    `<a href="${twitter}" target="_blank">    - Twitter.com/28m4d4g4j4</a>`,
                    `<a href="${linkedin}" target="_blank">    - LinkedIn.com/in/m4d4g4j428</a>`,
                    `<a href="${github}" target="_blank">    - Github.com/28m4d4g4j4</a>`
                ];
                break;
            case 'projects':
                response = displayProjects();
                break;
            case 'email':
                response = displayEmail();
                break;
            case 'banner':
                response = displayBanner();
                break;
            case 'clear':
                output.innerHTML = '';
                response = [];
                break;
            case 'history':
                response = commandHistory.join('<br>').split('<br>');
                break;
            default:
                response = [`Command not found: ${command}`];
        }
        typeOutResponse(response);
    }

    function typeOutResponse(lines) {
        let lineIndex = 0;
    
        function typeNextLine() {
            if (lineIndex < lines.length) {
                output.innerHTML += `<div>${lines[lineIndex]}</div>`;
                lineIndex++;
                output.scrollTop = output.scrollHeight; 
                setTimeout(typeNextLine, 300); 
            }
        }
    
        typeNextLine(); 
    }
    
});