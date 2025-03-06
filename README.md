##ER Diagram
```mermaid
erDiagram

    Artifact ||--|{ Substat : has
    Artifact ||--|| SetEffect : has

    SetEffect {
        int id PK
        string twoPcEffect
        string fourPcEffect
        string eightPcEffect
    }
    
    Artifact {
        int id PK
        string icon
        string name
        string setName
        string part
        string description
    }
    
    Substat {
        int id PK
        string icon
        string name
        bool isWeapon
        bool isArtifact
        bool isCore
    }
