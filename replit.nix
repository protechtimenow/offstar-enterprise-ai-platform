{ pkgs }: {
  deps = [
    pkgs.nodejs-18_x
    pkgs.nodePackages.typescript
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
  ];
}