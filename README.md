##ER Diagram
```mermaid
erDiagram

    GuildBossPost {
        int id PK
        string author
        date date
        string title
        string description
        bool archived
    }

    GuildBossHunters {
        int id PK
        int guildBossPostID FK
        int huntersID FK
        string teamSlot
        int alternativeHunter FK
    }

    Hunters {
        int id PK
        string name
        string description
        string history
        string iconImage
        string fullImage
        string bannerImage
        string element
        string class
    }

    Weapons {
        int id PK
        string type
        string name
        string description
        string icon
        string element
    }
    
    SJWBlessingStones {
        int id PK
        int guildBossPostID FK
        string item3
        int blessingStone1 FK
        int blessingStone2 FK
        int blessingStone3 FK
        int blessingStone4 FK
        int altBlessingStone1 FK
        int altBlessingStone2 FK
        int altBlessingStone3 FK
        int altBlessingStone4 FK
        int defBlessingStone1 FK
        int defBlessingStone2 FK
        int defBlessingStone3 FK
        int defBlessingStone4 FK
    }
    GuildBossSJW {
        int id PK
        int guildBossSJWArtifacts FK
        int guildBossPostID FK
        int weapon1 FK
        int altWeapon1 FK
        int weapon2 FK
        int altWeapon2 FK
        int skill1 FK
        int altSkill1 FK
        int skill2 FK
        int altSkill2 FK
    }

    GuildBossSJWArtifacts {
        int id PK
        int firstArtifactSet FK
        int secondArtifactSet FK
        int thirdArtifactSet FK
        int fourthArtifactSet FK
        int altFirstArtifactSet FK
        int altSecondArtifactSet FK
        int altThirdArtifactSet FK
        int altFourthArtifactSet FK
    }


    BlessingStone {
        int id PK
        string icon
        string tier
        string type
        string description
        string effect
    }

    Substat {
        int id PK
        string icon
        string name
        bool isWeapon
        bool isArtifact
        bool isCore
    }

    SetEffect {
        int id PK
        string setName
        string twoPcEffect
        string fourPcEffect
        string eightPcEffect
        string setIcon
    }

    Artifact {
        int id PK
        string icon
        string name
        int setEffectID FK
        string part
        string description
    }

    Skill {
        int id PK
        string name
        string icon
        string description
        string type
        string element
    }


    Skill ||--|{ GuildBossSJW:"belongs to"
    GuildBossHunters ||--|{ Hunters : "contains"
    GuildBossHunters ||--|| GuildBossPost : "belongs to"
    
    GuildBossSJW ||--|| GuildBossPost : "belongs to"
    GuildBossSJW ||--|{ Weapons : "uses"
    GuildBossSJW ||--|| GuildBossSJWArtifacts : "has"

    GuildBossSJWArtifacts ||--|{ Artifact : "contains"
 

    SJWBlessingStones ||--|{ BlessingStone : "contains"
    SJWBlessingStones ||--|| GuildBossPost : "belongs to"

    Substat }|--|{ Artifact : "has"
    Artifact }|--|| SetEffect : "uses"

