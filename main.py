import random

def generate_script(topic):
    intros = [
        f"Today, we uncover the untold story of {topic}.",
        f"In this documentary, we dive deep into the mysteries of {topic}.",
        f"Have you ever wondered about {topic}? Let's explore."
    ]

    bodies = [
        f"{topic} has shaped history in unexpected ways. From its origins to its impact today, the story is both fascinating and complex.",
        f"The journey of {topic} is filled with twists and turns—marked by innovation, struggle, and transformation.",
        f"Looking closer at {topic}, we find hidden details that reveal much more than what meets the eye."
    ]

    conclusions = [
        f"As we’ve seen, {topic} is more than just a chapter in history—it's a reflection of humanity itself.",
        f"The story of {topic} continues to shape our world, reminding us of the power of knowledge and discovery.",
        f"In the end, {topic} stands as a powerful reminder of how far we’ve come, and how much further we can go."
    ]

    script = f"{random.choice(intros)}\n\n{random.choice(bodies)}\n\n{random.choice(conclusions)}"
    return script


# Example use:
topic = input("Enter your documentary topic: ")
print("\n--- Documentary Script ---\n")
print(generate_script(topic))
