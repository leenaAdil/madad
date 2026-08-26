document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Interaction for Design Thinking Steps
    const processSteps = document.querySelectorAll('.process-step');
    
    processSteps.forEach(step => {
        step.addEventListener('click', () => {
            processSteps.forEach(s => s.classList.remove('active-step'));
            step.classList.add('active-step');
            
            const stepName = step.getAttribute('data-step');
            console.log(`Selected Stage: ${stepName}`);
        });
    });

    // 2. Interaction for Gantt Chart Tasks
    const taskBars = document.querySelectorAll('.task-bar');
    
    taskBars.forEach(bar => {
        bar.addEventListener('click', () => {
            const taskName = bar.getAttribute('data-task');
            alert(`Task Details: ${taskName}`);
        });
    });

    // 3. Interaction for Week Headers
    const weekItems = document.querySelectorAll('.week-item');
    
    weekItems.forEach(week => {
        week.addEventListener('click', () => {
            weekItems.forEach(w => w.classList.remove('active'));
            week.classList.add('active');
        });
    });
});