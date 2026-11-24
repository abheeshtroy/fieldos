import typer

app = typer.Typer(help="fieldOS CLI (early scaffold).")


@app.command()
def status() -> None:
    """Show the status of the local CLI."""
    typer.echo("fieldOS CLI scaffold ready; integration commands not implemented yet.")


if __name__ == "__main__":
    app()
