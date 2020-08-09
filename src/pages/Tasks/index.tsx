import React, { FC, useEffect } from 'react';

const TasksPage: FC = () => {
    useEffect(() => {
        document.title = `Tasks`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div>Tasks</div>;
};

export default TasksPage;
