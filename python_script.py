import os

def create_structure_from_text(structure_file_path):
    with open(structure_file_path, 'r') as f:
        lines = f.readlines()

    base_stack = []
    indent_stack = [-1]  # Keeps track of indentation levels
    current_path = ""

    for line in lines:
        # Skip empty lines
        if not line.strip():
            continue

        # Strip leading and trailing whitespace
        raw = line.rstrip()
        stripped = raw.lstrip()
        indent_level = len(raw) - len(stripped)

        # Get current directory or file name
        name = stripped.replace("├── ", "").replace("└── ", "").replace("│   ", "").strip()
        is_dir = name.endswith("/")

        # Adjust the stack to the current indent level
        while indent_level <= indent_stack[-1]:
            base_stack.pop()
            indent_stack.pop()

        base_stack.append(name)
        indent_stack.append(indent_level)

        # Join the current path
        current_path = os.path.join(*base_stack)

        if is_dir:
            os.makedirs(current_path, exist_ok=True)
        else:
            dir_path = os.path.dirname(current_path)
            os.makedirs(dir_path, exist_ok=True)
            open(current_path, 'a').close()  # Create empty file

    print("✅ Directory structure generated successfully.")

if __name__ == "__main__":
    structure_txt_path = "structure.txt"  # Update path if needed
    create_structure_from_text(structure_txt_path)