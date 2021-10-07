import Dexie from 'dexie';
import { useEffect } from 'react';
import { useState } from 'react';

const Main = () => {
    const db = new Dexie('TodoApp');
    db.version(1).stores({
        tasks: "title, description, categories"
    })
    db.open()
    .catch(err => {
        console.log(err.stack || err);
    })

    const [allTasks, setTasks] = useState('');

    const deleteTask = async (id) => {
        console.log(id);
        db.tasks.delete(id);
        let allTasks = await db.posts.toArray();
        setTasks(allTasks);
    }

    const addTask = async (post) => {
        db.posts.add(post)
        .then(async () => {
            let allTasks = await db.posts.toArray();
            setTasks(allTasks)
        });
    }

    useEffect(() => {
        const getTasks = async () => {
            let allTasks = await db.posts.toArray();
            setTasks(allTasks);
        }
        getTasks();
    }, [])
}