import { Card, CardButton, CardDescription, CardTitle } from "@/components/card";

export default function MorningPage() {
    return (
        <div className="min-h-screen mb-4">
            <div className="card-container">
            <Card>
        <CardTitle>Dinner</CardTitle>
        <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis deleniti hic consequatur quam et aliquam nemo, fugiat aut voluptatibus est quo provident! Ipsum laboriosam in dolor, debitis veniam aperiam?</CardDescription>
        <CardButton link="/night/dinner"/>
      </Card>

      <Card>
        <CardTitle>Self-Accountability</CardTitle>
        <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis deleniti hic consequatur quam et aliquam nemo, fugiat aut voluptatibus est quo provident! Ipsum laboriosam in dolor, debitis veniam aperiam?</CardDescription>
        <CardButton link="/night/self_accountability"/>
      </Card>
            </div>
        </div>
    );

}