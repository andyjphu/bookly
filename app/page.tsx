import Card from "./Card";


export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center">



      <div className="w-[80%] flex flex-col gap-4">

        <Card>
          <h1>Hey</h1>
        </Card>
        <div className="shadow-lg p-10">
          Hey
        </div>

      </div>
    </main>
  );
}
