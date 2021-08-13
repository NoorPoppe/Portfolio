import { useState } from 'react';
import items from '../components/projects/AllData';
import Menu from '../components/projects/menu';
import Button from '../components/projects/button';

const allCategories = ['All', ...new Set(items.map(item => item.category))];
console.log(allCategories);

const Projects = () => {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);

    //Filter Function
    const filter = (button) => {

        if (button === 'All') {
            setMenuItem(items);
            return;
        }

        const filteredData = items.filter(item => item.category === button);
        setMenuItem(filteredData)
    }

    return (
        <main>
            <Button button={buttons} filter={filter} />
            <Menu menuItem={menuItem} />
        </main>
    );
};

export default Projects;
