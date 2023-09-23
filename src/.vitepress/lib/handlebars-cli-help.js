import cp from "child_process";

export async function getHandlebarsCliHelp() {
  const handlebarsCliUrl = await import.meta.resolve("handlebars/bin/handlebars");
  const handlebarsCliPath = new URL(handlebarsCliUrl).pathname;
  const nodeExecutable = process.argv[0];

  const { stdout } = cp.spawnSync(nodeExecutable, [handlebarsCliPath, "--help"], {
    argv0: "handlebars",
    stdio: ["pipe", "pipe", "pipe"],
    encoding: "utf-8",
  });

  return stdout;
}
