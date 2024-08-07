export default function deriveInitials(name) {
    let initials = "";
    const nameArray = name?.trim()?.split(" ");
    for (let i in nameArray) initials += nameArray[i][0]?.toUpperCase();

    return initials;
}