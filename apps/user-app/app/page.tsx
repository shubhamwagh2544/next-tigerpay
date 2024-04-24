import { PrismaClient } from "@repo/db/client";
const prisma = new PrismaClient();

export default function Page(): JSX.Element {
  async function test() {
    await prisma.user.findUnique({
      where: {
        id: 1
      }
    })
  }
  return (
    <div className="text-2xl">
      Hello World
    </div>
  );
}
