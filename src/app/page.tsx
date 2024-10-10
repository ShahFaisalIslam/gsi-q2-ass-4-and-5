import { Card, CardButton, CardDescription, CardTitle } from "@/components/card";

export default function Home() {
  return (
    <div className="min-h-screen mb-4">
      <div className="flex flex-wrap">
        <Card>
          <CardTitle>Meditation</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis deleniti hic consequatur quam et aliquam nemo, fugiat aut voluptatibus est quo provident! Ipsum laboriosam in dolor, debitis veniam aperiam?</CardDescription>
          <CardButton link="/morning/meditation" />
        </Card>

        <Card>
          <CardTitle>Breakfast</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis deleniti hic consequatur quam et aliquam nemo, fugiat aut voluptatibus est quo provident! Ipsum laboriosam in dolor, debitis veniam aperiam?</CardDescription>
          <CardButton link="/morning/breakfast" />
        </Card>

        <Card>
          <CardTitle>Lunch</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis deleniti hic consequatur quam et aliquam nemo, fugiat aut voluptatibus est quo provident! Ipsum laboriosam in dolor, debitis veniam aperiam?</CardDescription>
          <CardButton link="/day/lunch" />
        </Card>

        <Card>
          <CardTitle>Supper</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis deleniti hic consequatur quam et aliquam nemo, fugiat aut voluptatibus est quo provident! Ipsum laboriosam in dolor, debitis veniam aperiam?</CardDescription>
          <CardButton link="/evening/supper" />
        </Card>

        <Card>
          <CardTitle>Dinner</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis deleniti hic consequatur quam et aliquam nemo, fugiat aut voluptatibus est quo provident! Ipsum laboriosam in dolor, debitis veniam aperiam?</CardDescription>
          <CardButton link="/night/dinner" />
        </Card>

        <Card>
          <CardTitle>Self-Accountability</CardTitle>
          <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis deleniti hic consequatur quam et aliquam nemo, fugiat aut voluptatibus est quo provident! Ipsum laboriosam in dolor, debitis veniam aperiam?</CardDescription>
          <CardButton link="/night/self_accountability" />
        </Card>

      </div>
    </div>
  );
}
