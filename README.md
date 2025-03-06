##ER Diagram
```mermaid
erDiagram

    GuildBossPost {
        int id PK
        string author
        date date
        string title
        string description
    }

    GuildBossHunters {
        int id PK
        int guildBossPostID FK
        int hunterID FK
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

    HunterArtifacts {
        int hunterID PK, FK
        int artifactID PK, FK
    }

    Artifact {
        int id PK
        string icon
        string name
        int setEffectID FK
        string part
        string description
    }

    GuildBossSJW {
        int id PK
        int guildBossPostID FK
    }

    GuildBossSJWWeapon {
        int guildBossSJWID PK, FK
        int weaponID PK, FK
        string slot
    }

    GuildBossSJWArtifact {
        int guildBossSJWID PK, FK
        int artifactID PK, FK
        string slot
    }

    GuildBossSJWSkill {
        int guildBossSJWID PK, FK
        int skillID PK, FK
        string slot
    }

    Skill {
        int id PK
        string name
        string icon
        string description
        string type
        string element
    }


    SJWBlessingStone {
        int guildBossPostID PK, FK
        int blessingStoneID PK, FK
        string type
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


    GuildBossHunters ||--|{ Hunters : "contains"
    GuildBossHunters }|--|| GuildBossPost : "belongs to"
    
    GuildBossSJW ||--|| GuildBossPost : "belongs to"
    
    GuildBossSJWWeapon ||--|{ Weapons : "contains"
    GuildBossSJWWeapon ||--|| GuildBossSJW : "belongs to"
    
    GuildBossSJWArtifact ||--|{ Artifact : "contains"
    GuildBossSJWArtifact ||--|| GuildBossSJW : "belongs to"

    GuildBossSJWSkill ||--|{ Skill : "uses"
    GuildBossSJWSkill ||--|| GuildBossSJW : "belongs to"

    SJWBlessingStone }|--||GuildBossPost : "contains"
    SJWBlessingStone ||--|{ BlessingStone : "contains"

    Substat ||--|{ Artifact : "has"
    Artifact ||--|| SetEffect : "has"

    HunterArtifacts ||--|| Hunters : "has"
    HunterArtifacts }|--|{ Artifact : "equipped by"
