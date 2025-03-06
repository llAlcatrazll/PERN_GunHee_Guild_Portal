## ER Diagram
```mermaid
erDiagram

    Artifact ||--|{Substats: has
    Artifact ||--||Set_Effect: has

Set_Effect {
    int id pk
    string 2pcEffect
    string 4pcEffect
    string 8pcEffect
}
Artifact {
    int id pk
    string icon
    string name
    string setName
    string part
    string description
}
Substats {
    int id pk
    string icon
    string name
    bool weapon
    bool artifact
    bool core
}

