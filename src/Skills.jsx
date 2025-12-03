import "./Skills.css"
function Skills() {
    return (
        
    <div className="skills-section">
        <h1>Languages</h1>
        <table>
            <tr>
                <th>Language</th>
                <th>Skill level</th>
            </tr>
            <tr>
                <td>HTML</td>
                <td>Intermediate</td>
            </tr>
            <tr>
                <td>JavaScript</td>
                <td>Intermediate</td>
            </tr>
            <tr>
                <td>SQL</td>
                <td>Basic</td>
            </tr>
            <tr>
                <td>Java</td>
                <td>Intermediate</td>
            </tr>
            <tr>
                <td>PHP</td>
                <td>Basic</td>
            </tr>
        </table>

        <h1>Libraries / Frameworks</h1>
        <table>
            <tr>
                <th>Library / Framework</th>
                <th>Skill level</th>
            </tr>
            <tr>
                <td>React</td>
                <td>Basic</td>
            </tr>
            <tr>
                <td>React Native</td>
                <td>Basic</td>
            </tr>
            <tr>
                <td>Node.js</td>
                <td>Basic</td>
            </tr>
        </table>

    </div>

        
    )
}

export default Skills;