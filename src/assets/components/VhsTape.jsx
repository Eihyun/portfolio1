import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import './VhsTape.css';

function VhsTape({ id }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
        .then(response => response.json())
        .then(data => {
            setProjects(data);
        });
    }, []);

    return (
        <motion.div
        className={`vhs-tape ${id} pretendard`}
        id="vhs"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
        >
            <div></div>
        </motion.div>
    );
}

export default VhsTape;
