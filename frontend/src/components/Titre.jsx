function Titre({ text, level = 1, subtext, sublevel = 2 }) {
    // clamp level between 1 and 6 for valid heading tags
    const lvl = Math.min(6, Math.max(1, level));
    const Heading = `h${lvl}`;

    // secondary heading only rendered when subtext is provided
    const subLvl = Math.min(6, Math.max(1, sublevel));
    const SubHeading = `h${subLvl}`;

    return (
        <>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Heading className="text-3xl font-bold mb-4">{text}</Heading>
            {subtext && (
                <>
                    {/* eslint-disable-next-line react/jsx-pascal-case */}
                    <SubHeading className="text-2xl font-semibold mb-2">
                        {subtext}
                    </SubHeading>
                </>
            )}
        </>
    );
}

export default Titre;