function hello(): string {
  return "hello";
}

function main(): void {
  const div: HTMLDivElement = document.createElement('div');
  div.textContent = hello();
  document.body.appendChild(div);
}

main();