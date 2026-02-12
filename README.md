# Lifetime Spent

A browser-based life-simulation game inspired by **Spent**, expanded to run day-by-day from age 13 to retirement.

## Run locally

```bash
cd /workspace/fsdagadsa
python -m http.server 8000 --directory /workspace/fsdagadsa
```

Open <http://127.0.0.1:8000> in your browser.

## Playwright / MCP browser tool troubleshooting

If `mcp__browser_tools__run_playwright_script` reports `status 404`, it usually means the
browser container is not connected to the same server process.

Use this flow:

1. Start the web server in this repo root with an explicit directory:

   ```bash
   python -m http.server 8000 --directory /workspace/fsdagadsa
   ```

2. In the Playwright tool call, forward `ports_to_forward: [8000]`.
3. Navigate to `http://127.0.0.1:8000`.

If you still get 404, restart the server and rerun the Playwright invocation.

## Controls

- Pick your college tier and major first; degree-required careers unlock only after you complete college.
- Click one of the presented choices each day; the game now tracks month/date and uses larger life-stage option pools to reduce repeats, including high-school and summer-job events.
- Use the Housing panel to move between locations, buy a primary home, and buy rental properties for income.
- Use the Investments panel to move cash into high-yield savings, CDs, or index funds.
- Taxes are applied to yearly earned + rental income and feed into your daily net cashflow.
- Your savings update from `income - expenses + choice effects`.
- You lose if savings, health, or energy drop below survival thresholds.
- Reach retirement age with resources intact to win and receive a Final Score.
