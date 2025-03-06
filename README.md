## ER Diagram
```mermaid
erDiagram

    Artifact ||--|{Substats: has
    Artifact ||--||Set_Effect: has

Set_Effect {
    int id pk
    string 2pc_effect
    string 4pc_effect
    string 8pc_effect
}
Artifact {
    int id pk
    string icon
    string name
    string set_name
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

