// doesn't work for findSolution(24)
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