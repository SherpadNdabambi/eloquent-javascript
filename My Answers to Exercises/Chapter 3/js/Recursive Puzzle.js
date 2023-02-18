// doesn't work for findSolution(24)

/**
 * 
 * @param {number} target
 * @returns {sting} how to get to the target number by stating from one and
 * either multiplying by 3 or adding 5
 */
function findSolution(target)
{
    function find(current, history)
    {
        if (current < 1) return null;
        if (current == 1) return history;
        return find(current - 5, '(' + history + " + 5)") || find((current / 3), '(' + history + " * 3)");
    }

    return find(target, "1");
}