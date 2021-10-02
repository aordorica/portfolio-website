const variants = {
    initial: {
        opacity: 0,
        y: 8,
        transition: {
            duration: 1,
            ease: [0.61, 1, 0.88, 1],
        },
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: [0.61, 1, 0.88, 1],
        },
    },
};

export default variants;