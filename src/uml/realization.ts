interface ControleRemoto {
  play(): void;
  pause(): void;
}

class Bluray implements ControleRemoto {
  play(): void {}
  pause(): void {}
}

interface ControleSom extends ControleRemoto {
  mudarRadio(): void;
}

class Som implements ControleSom {
  mudarRadio(): void {}
  play(): void {}
  pause(): void {}
}
