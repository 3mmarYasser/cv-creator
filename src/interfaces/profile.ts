interface ProfileJobs {
    title: string;
    photo: string;
    details: string;
}

interface ProfileFacts {
    hours: number;
    coffee: number;
    happy: number;
    projects: number;
}

interface ProfileSkills {
    title: string;
    progress: number;
}

interface ProfileContact {
    location: string;
    phone: string;
    email: string
}

interface ProfileSocial {
    facebook: string;
    youtube: string;
    twitter: string;
}

interface Profile {
    fullName: string;
    smallDisc: string;
    disc: string;
    photo: string;
    backdropPhoto: string;
    jobs: ProfileJobs[];
    ways: ProfileJobs[];
    clients: string[];
    facts: ProfileFacts;
    skills: ProfileSkills[];
    map: string;
    contact: ProfileContact;
    social: ProfileSocial;
}

export type {
    Profile,
    ProfileJobs,
    ProfileFacts
}