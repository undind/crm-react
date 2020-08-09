import React, { FC, useEffect } from 'react';

const TasksPage: FC = () => {
    useEffect(() => {
        document.title = `Profile`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div>Profile</div>;
};

export default TasksPage;
