// doesn't work for findSolution(24)
function findSolution(target)
{
    function find(current, history)
    {
        if (current < 1) return null;
        if (current == 1) return history;
        if (!(current % 3) && find((current / 3), history.replace('1', "1 * 3")))
            return find((current / 3), history.replace('1', "1 * 3"));
        return find(current - 5, history + " + 5");
    }

    return find(target, "1");
}