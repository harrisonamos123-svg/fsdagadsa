# Lifetime Spent

A browser-based life-simulation game inspired by **Spent**, expanded to run year-by-year from age 18 to retirement.

## Run locally

```bash
cd /workspace/fsdagadsa
python -m http.server 8000 --directory /workspace/fsdagadsa
```

Open <http://127.0.0.1:8000> in your browser.

## Controls

- Click one of the presented choices each year.
- Your savings update from `income - expenses + choice effects`.
- You lose if savings, health, or energy drop below survival thresholds.
- Reach retirement age with resources intact to win.
