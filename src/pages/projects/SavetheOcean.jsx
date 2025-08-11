import { Link } from 'react-router-dom';

// Components
import CodeBlock from '../../assets/components/CodeBlock';
import SideBar from '../../assets/components/SideBar';

// CSS
import "./ProjectDetail2.css";

// Media
import RecyclingBins from '../../assets/images/recycling-bins.JPG';
import WasteItems from '../../assets/images/waste-items.png';
import GameFlow from '../../assets/images/game-flow.png';
import GameInstruction from '../../assets/images/game-instruction.png';

function SavetheOcean() {
    // table of content
    const tocItems = [
        { href: "#overview",  label: "Project Overview" },
        { href: "#goals",     label: "Development Goals" },
        { href: "#gameflow",  label: "Game Flow" },
        { href: "#handling",  label: "Multiple Condition Handling" },
        { href: "#onboarding",label: "Player Onboarding" },
        { href: "#reflection",label: "Reflection & Next Step" },
    ];

    return(
        <section className="grid project-detail">
            <div className="col-12-md col-4-sm">
                <h1 className="case-title noka fw-6">Case Study: Save the Ocean</h1>
            </div>
            <div className="col-12-md col-4-sm case-body-container pretendard">
                {/* Visit link */}
                <div className="case-body">
                    <div className="case-text case-visit">
                        <p>
                            <em>Visit the website to play:
                                <a href="https://savetheocean.eihyunkim.com" target="_blank" className="case-link">Save the Ocean</a>
                            </em>
                        </p>
                    </div>
                </div>
                {/* Table */}
                <div className="case-body">
                    <div className="case-text case-table ">
                        <h2 className="case-subtitle fw-6">Table of Content</h2>
                        <ul>
                            <li>
                                <a href="#overview"  className="case-link">Project Overview
                                </a>
                            </li>
                            <li>
                                <a href="#goals"  className="case-link">Development Goals
                                </a>
                            </li>
                            <li>
                                <a href="#gameflow"  className="case-link">Game Flow
                                </a>
                            </li>
                            <li>
                                <a href="#handling"  className="case-link">Multiple Condition Handling
                                </a>
                            </li>
                            <li>
                                <a href="#onboarding"  className="case-link">Player Onboarding
                                </a>
                            </li>
                            <li>
                                <a href="#reflection"  className="case-link">Reflection & Next Step
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Project Overview */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="overview">Project Overview</h2>
                        <h3 className="case-subtitle">Tech stack: HTML, CSS, Vanilla JavaScript, Figma, Procreate</h3>
                        <p>Save the Ocean is an interactive browser-based game that raises awareness about marine pollution and the importance of proper recycling. Players take on the role of an octopus with sorting waste items into the correct recycling bins, learning how proper waste management can protect marine life.</p>
                        <figure className="case-image">
                            <img src={RecyclingBins}></img>
                            <figcaption className="footnote">Recycling station @ BCIT</figcaption>
                        </figure>
                        <p>My primary responsibilities were implementing the game logic, managing the interactive elements, and ensuring a smooth user experience. All hand-drawn visuals, except for the waste item icons (from <a href="https://stock.adobe.com/ca/" target="_blank" className="case-link">Adobe Stock</a> for quick recognizability), were created in a colorful style to engage the target audience.</p>
                        <ul>
                            <li>K-12 students: to help establish recycling habits early through interactive learning aligned with environment education curriculums.</li>
                            <li>Adults unfamiliar with recycling: to provide an engaging, non-intimidating way to learn proper recycling methods and reduce contamination in recycling systems.</li>
                        </ul>
                        <figure className="case-image">
                            <img src={WasteItems}></img>
                            <figcaption className="footnote">From left to right: a bottle, a can, a paper, and a banana.</figcaption>
                        </figure>
                    </div>
                </div>
                {/* Goals */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="goals">Development Goals</h2>
                        <ol>
                            <li>Implement smooth, responsive arrow-key controls for character movement.</li>
                            <li>Build conditional game logic for multiple win/loss outcomes.</li>
                            <li>Create a dynamic timer and scoring system with live feedback.</li>
                            <li>Integrate custom illustrations with functional elements for clear player guidance.</li>
                            <li>Improve onboarding through interface enhancements.</li>
                        </ol>
                    </div>
                </div>
                {/* Game Flow */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="gameflow">Game Flow</h2>
                        <figure className="case-image">
                            <img src={GameFlow} alt=''></img>
                            <figcaption className="footnote">Game Flow </figcaption>
                        </figure>
                        <p>The game begins on the Start Page, where players can choose between two options: How to Play or Start Game. Once the game begins, a timer counts down from 60 seconds.</p>
                        <CodeBlock language='javascript' className="snippet">{`// Time set for the game play
let time = 60;
const displayTime = document.querySelector('#time');

function gameStart() {
    ...
    // Display time starting 60 seconds
    displayTime.innerHTML = time;
    // When start button is clicked, time starts going right away
    const timeInterval = setInterval(function () {
        // Time subtract by 1 every second
        time --;
        displayTime.innerHTML = time;
    })
}`}</CodeBlock>
                        <p>Players use the arrow keys to “throw” each item into the correct recycling bin. Correct sorting increases the score; incorrect sorting removes one of the three available hearts.</p>
                        <CodeBlock language='javascript' className="snippet">{`const itemMap = {
    ArrowUp: banana,
    ArrowLeft: bottle,
    ArrowRight: paper,
    ArrowDown: can
};

// Handle arrow key press
function handleKey(event) {
    const expectedItem = itemMap[event.key];
    if (!expectedItem) return;

    const currentItem = itemList[0];
    if (expectedItem === currentItem) {
        itemList.shift();
        itemList.push(getRandomItem());
        renderItems();
        score++;
        updateScore();
    } else {
        loseHeart();
    }
}`}</CodeBlock>
                        <p>The game can end in three ways:</p>
                        <ol>
                            <li>Sad Ending 1 – Hearts Lost: The player loses all three hearts before the timer runs out.</li>
                            <li>Sad Ending 2 – Time’s Up: The timer reaches zero and the player has sorted fewer than 20 items.</li>
                            <li>Happy Ending – Success: The timer reaches zero and the player has sorted more than 20 items correctly.</li>
                        </ol>
                        <p>At the end of the round, players are shown their result and given a clear Play Again button to restart the game instantly. They also see a link to <a href="https://recyclebc.ca/" target='_blank' className="case-link">Recycle BC</a> for further learning about proper recycling methods. This loop keeps the pace quick and encourages players to try again to improve their score and win the happy ending.</p>
                    </div>
                </div>
                {/* Condition Handling */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="handling">Multiple Condition Handling</h2>
                        <p>This game can end in three different ways: lose all hearts, lose by time, or win by score. The challenge was making sure these outcomes didn’t overlap.</p>
                        <p>I solved overlapping endings by adding a single source of truth for game state and guarding every path that could end the round. The key is a <code>gameOver</code> flag plus early returns, so only one outcome can fire.</p>
                        <CodeBlock language='javascript' className="snippet">{`let gameOver = false;

function fail() {
    if (gameOver) return;          // guard: prevent double endings
    gameOver = true;

    ...

    // reason message
    failTitle.innerHTML = '';
    const reason = document.createElement('p');
    reason.textContent = (wrongCount > 2) ? "You lost all your hearts!" : "Time's up!";
    const followUp = document.createElement('p');
    followUp.textContent = "Try again to save the ocean!";
    failTitle.append(reason, followUp);

  reset();                       // clear timers/inputs and restore UI state
}
`}</CodeBlock>
                        <p>Timer loop respects gameOver and decides a single ending.</p>
                        <CodeBlock language='javascript' className="snippet">{`function gameStart() {
  // ...
    const timeInterval = setInterval(function () {
        if (gameOver) {               // stop ticking once ended
        clearInterval(timeInterval);
        return;
        }

        time--;
        displayTime.innerHTML = time;

        if (time <= 0) {
        clearInterval(timeInterval);
        // single decision point: win vs lose by time/score/hearts
        if (score < 20 || wrongCount > 2) {
            fail();
        } else {
            success();
        }
        }
    }, 1000);
}`}</CodeBlock>
                        <p>Heart-loss path funnels into the same end-state:</p>
                        <CodeBlock language='javascript' className="snippet">{`function loseHeart() {
    wrongCount++;

    if (wrongCount === 1) {
        heart3.src = '../images/Heart_x.png';
        gamePage.style.backgroundImage = 'url(../images/Game_bg_2.png)';
    } else if (wrongCount === 2) {
        heart2.src = '../images/Heart_x.png';
        gamePage.style.backgroundImage = 'url(../images/Game_bg_3.png)';
    } else if (wrongCount === 3) {
        fail();                       // reuse single end path
    }
}`}</CodeBlock>
                        <p>Success path mirrors fail (no overlap):</p>
                        <CodeBlock language='javascript' className="snippet">{`function success() {
    if (gameOver) return;           // symmetric guard
    gameOver = true;

    ...

    reset();
}`}</CodeBlock>
                        <p>Reset centralizes cleanup:</p>
                        <CodeBlock language='javascript' className="snippet">{`function reset() {
    wrongCount = 0;
    score = 0;
    time = 60;
    ...

    window.removeEventListener('keydown', handleKey);  // disable inputs
}`}</CodeBlock>
                        <p>With this setup, as soon as <code>fail()</code> or <code>success()</code> runs, the game resets, the timer stops, and keyboard controls are disabled. This ensures the player sees just one clear result for each round, without mixed messages.</p>
                    </div>
                </div>
                {/* Player Onboarding */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="onboarding">Player Onboarding</h2>
                        <p>When the game was first tested, some players didn't immediately understand how to control the octopus or which keys matched each recycling bin. The instruction screen listed the arrow keys in a vertical column, while the actual gameplay used a directional layout. This slowed their start and sometimes led to mistakes in the first few moves.</p>
                        <figure className="case-image">
                            <img src={GameInstruction}></img>
                            <figcaption className="footnote">Left: before. Right: after.</figcaption>
                        </figure>
                        <p>I redesigned the instruction screen so the arrow keys were displayed in the same directional layout used during gameplay, alongside their matching waste bin types. This made the connection between controls and actions. I also added a Start Game button directly on the instruction screen, letting players begin playing as soon as they understood the rules, without going back to the home page.</p>
                    </div>
                </div>
                {/* Reflection */}
                <div className="case-body">
                    <div className="case-text">
                        <h2 className="case-subtitle fw-6" id="reflection">Reflection & Next Step</h2>
                        <p>Building Save the Ocean with Vanilla JavaScript came with its own challenges. Without the structure of a single-page application, I couldn’t rely on dynamic rendering, so I stacked the start page, gameplay page, and ending page on top of each other and used CSS to reveal the right one at the right time. It was a bit of a juggling act, but it worked.</p>
                        <p>Even with those hurdles, it was a fun project to make. I grew up playing small flash games like this, so creating one myself felt like carrying on the tradition. It’s satisfying to know that a simple front-end build can still deliver a complete game experience.</p>
                        <p>Next, I want to make it mobile-friendly with touch controls, add more item types to keep things interesting, and experiment with short educational pop-ups explaining why each item belongs in a certain bin. That way, it can stay fun while packing in more learning value.</p>
                    </div>
                </div>
                {/* Additional link */}
                <div className="case-body">
                    <div className="case-text case-visit">
                        <p>
                            <em>GitHub Repository:
                                <a href="https://github.com/Eihyun/SavetheOcean" target="_blank" className="case-link">SavetheOcean</a>
                            </em>
                        </p>
                        <p>
                            <em>And if you're curious about the wireframes:
                                <a href="https://www.figma.com/design/yTX2tJ5vOcLrIK5QrGVNgS/Save-the-Ocean?node-id=8-58&t=OfuomgpeHN77TQPm-1" target="_blank" className="case-link">Figma</a>
                            </em>
                        </p>
                    </div>
                </div>

                {/* Bottom Nav */}
                <nav className='projects-nav'>
                    <div className="previous">
                        <Link to="/projects/simpleclinic"
                        onClick={() => {window.scroll(0,0)}} 
                        >⬅️ Previous</Link>
                    </div>
                    <div className="back">
                        <Link to="/projects"
                        onClick={() => {window.scroll(0,0)}} 
                        >All Project</Link>
                    </div>
                    <div className="next">
                        <Link to="/projects/yogurt"
                        onClick={() => {window.scroll(0,0)}} 
                        >Next ➡️</Link>
                    </div>
                </nav>

            </div>

            <SideBar items={tocItems} />
        </section>

    )

}

export default SavetheOcean;